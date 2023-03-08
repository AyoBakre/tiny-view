pipeline {
   agent any
   stages {
        stage('Master Branch Deploy Code') {
            when {
                branch 'main'
            }
            steps {
                sh """
                echo "Building Artifact from Master branch"
                """

                sshagent (credentials: ['builder_old_testserver']) {
                    sh 'ssh -t -t builder@test.linuxjobber.com -p 2222 -o StrictHostKeyChecking=no "cd /tinyview/prod/www/ && sudo git pull && cd .. && sudo docker build -t tinyviewprod . && cd .. && sudo docker run --env-file=.env  tinyviewprod" '
                }

                sh """
                echo "Deploying Code from Master branch"
                """
            }
        }
        stage('live Branch Deploy Code') {
            when {
                branch 'lyve'
            }
            steps {
                sh """
                echo "Building Artifact to build live environment from Master branch"
                """

                sshagent (credentials: ['builder_old_testserver']) {
 sh 'ssh -t -t builder@test.linuxjobber.com -p 2222 -o StrictHostKeyChecking=no "cd /tinyview/lyve/www/ && sudo git pull && cd .. && sudo docker build -t tinyviewlyve . && cd .. && sudo docker run --env-file=.env  tinyviewlyve" '
                
}

                sh """
                echo "Deployed Code to live from Master branch"
                """
            }
        }
        stage('Integration Branch Deploy Code') {
            when {
                branch 'int'
            }
            steps {
                sh """
                echo "Building integration branch"
                """

                sshagent (credentials: ['builder_old_testserver']) {
		 sh 'ssh -t -t builder@test.linuxjobber.com -p 2222 -o StrictHostKeyChecking=no "cd /tinyview/int/www/ && sudo git pull && cd .. && sudo docker build -t tinyviewint . && cd .. && sudo docker run --env-file=.env  tinyviewint" '                
}

                sh """
                echo "Deploying Code from integration branch"
                """
           }
        }
        stage('dev developer Branch Deploy Code') {
            when {
            expression {env.BRANCH_NAME.substring(0,2) == 'tv'}
            }
            environment {
                DEVBRANCH = "${env.BRANCH_NAME}"
                ENVIRONMENTNUM="${env.BRANCH_NAME.substring(2,3)}"
            }
            steps {
                script{
                        sh """
                        echo "Building dev${ENVIRONMENTNUM}_ developer branch"
                        """

                        sshagent (credentials: ['builder_old_testserver']) {
			 sh 'ssh -t -t builder@test.linuxjobber.com -p 2222 -o StrictHostKeyChecking=no "cd /tinyview/dev/www/ && sudo git pull && sudo git checkout ${DEVBRANCH} && cd .. && sudo docker build -t tinyviewdev . && cd .. && sudo docker run --env-file=.env  tinyviewdev" '

                        }

                        sh """
                        echo "Deploying Code from dev${ENVIRONMENTNUM} branch"
                        """
                    
                }
           }
        }
   }
     post{
       always {
       mail to: "davtellez01@gmail.com",
       subject: "jenkins build:${currentBuild.currentResult}: ${env.JOB_NAME}",
       body: "${currentBuild.currentResult}: Job ${env.JOB_NAME}\nMore Info can be found here: ${env.BUILD_URL}"
       }
   }
}


