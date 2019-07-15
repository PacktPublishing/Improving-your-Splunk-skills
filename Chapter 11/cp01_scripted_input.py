#!/usr/bin/env python

#
# Splunk Operational Intelligence Cookbook
# By Derek Mock, Paul Johnson and Josh Diakun
# Packt Publishing, February 2014.
#
# Script Name: cp01_scripted_input.py
# Description: A simple python script that will output a timestamp and
# text to stdout for the purposes of demostrating how a scripted input
# works in Splunk.
#

import time

now = time.strftime("[%d-%m-%Y %H:%M:%S]")

print now + " Welcome to the Splunk Operational Intelligence Cookbook! This recipe tastes grreeaaattt!"

