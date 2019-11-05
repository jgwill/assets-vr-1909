#!/bin/bash

# This file will be used to publish an analyzer
# @STCGoal Be a reference to analyze possible automation or simplification \
# Such as here is the Name of the related project related to
export xname="xMandelbrot" ;
#Namespace of the result
export resns="x__mandelbrot__191103__204__Animating_FractalNumber_TO_OBSERVE__90pc"
# @prompt Hint description of Next action suceeding what this does
export naction="SSH to WPApp and update VR assets and create a new post with the OBSERVER"
# Corrective action
export caction="might be offline, retry executing $_"

# current action state success/failure
# bellow are variable
export obj="VR Repo"
export verb="pushing"
# bellow are constant
export action="$verb $obj"
export sstate="$action COMPLETED"
export fstate="FAILED $action $ostate"

# @messages Telling user what is the state after completing this action and what is the next step
export msg_failed="$fstate ; $caction"
export msg_success="$sstate ; $naction "

git push &&\
	ginol "$msg_success " \
	|| ginol "$msg_failed"
