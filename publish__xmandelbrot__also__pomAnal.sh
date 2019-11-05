#!/bin/bash

# This file will be used to publish an analyzer
# @STCGoal Be a reference to analyze possible automation or simplification \
# Such as here is the Name of the related project related to
export xname="xMandelbrot" ;
#Namespace of the result
export resns="x__mandelbrot__191103__204__Animating_FractalNumber_TO_OBSERVE__90pc"
# Succeeding action
export suca="SSH to WPApp and update VR assets and create a new post with the OBSERVER"
# current action state success/failure
export ostate="VR Repo"
export astate="PUSHED $ostate"
export fstate="Could not PUSHED $ostate"

git push &&\
	ginol "$xname PUSHED ; $suca " \
	|| ginol "$xname PUSH FAILED, might be offline so go to bash and re-execute this"
