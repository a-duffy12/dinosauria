from spreadsheet import data
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cbook as cbook

# marker size relative to genus size value
volume = ()

# generate simple scatter
plt.xlabel('Time Existed (MYA)')
plt.ylabel('Length (m)')
plt.axis([240, 60, 0, 35])
plt.title('Size of Non-Avian Dinosaurs Over Time')
plt.scatter(data.MYA, data.Size, edgecolors='k') # generates a plot
plt.set_axisbelow(True) # set axis below the points
plt.grid(b=True, which='major', color='#777777', linestyle='-')
plt.minorticks_on() # turn minor gridlines on
plt.grid(b=True, which='minor', color='#aaaaaa', linestyle='dashed', alpha=0.5)
plt.savefig('visualizations/dino_size_over_time.png', dpi=300) # save before show, or else a new fig is generated
plt.show() # displays the plot
