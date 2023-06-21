#!/usr/bin/env bash

ASG_NAMES=$(aws autoscaling describe-auto-scaling-groups --no-paginate --output text --query "AutoScalingGroups[? Tags[? (Key=='Project') && Value=='$TAG_VALUE']].AutoScalingGroupName")
for ASG in $ASG_NAMES; do
    aws autoscaling delete-auto-scaling-group --auto-scaling-group-name $ASG --force-delete
done
