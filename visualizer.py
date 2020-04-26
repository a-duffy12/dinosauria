from spreadsheet import data
import pandas as pd
import numpy as np
import matplotlib.pyplot as plot
import matplotlib.cbook as cbook

# marker size relative to genus size value
volume = ()

# generate simple scatter
plot.xlabel('Time Existed (MYA)')
plot.ylabel('Length (m)')
plot.title('Size of Non-Avian Dinosaurs Over Time')
plot.scatter(data.MYA, data.Size) #generates a plot
plot.show() # displays the plot