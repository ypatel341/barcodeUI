#!/usr/bin/env groovy

@Library(['shared_pipeline@master', 'com.optum.jenkins.pipeline.library@master']) _
import com.dojo.EnvVar

def btbModVars = new EnvVar(
    //dockerName: 'cbhui',
    gitName: '',
    dockerDevBuildName: '',
    dockerDevTagName: '',
    dockerTestBuildName: '',
    dockerTestTagName: '',
    dockerStageBuildName: '',
    dockerStageTagName: '',
    devProjectName: 'cdxdev',
    testProjectName: 'cdxtst',
    stageProjectName: 'btbmodstg'
    dockerImgUrl: 'docker.optum.com/frontdoor_mod/{Your image here}',
    dockerLocation: 'frontdoor_mod/{your image here}',
    testApproversString: '',
    notifyString: ''
)

def pathName = "${JOB_NAME}"

if (pathName.contains('atdd')){
    myRegressionPipeline(btbModVars)
} else {
    myPipeline(btbModVars)
}
