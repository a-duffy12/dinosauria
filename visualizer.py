from spreadsheet import data
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.cbook as cbook

# marker size relative to genus size value
volume = ()

# # generate simple scatter
# plt.xlabel('Time Existed (MYA)')
# plt.ylabel('Length (m)')
# plt.axis([240, 60, 0, 35])
# plt.title('Size of Non-Avian Dinosaurs Over Time')
# plt.scatter(data.MYA, data.Size, edgecolors='k') # generates a plot
# #ax.set_axisbelow(True) # set axis below the points
# plt.grid(b=True, which='major', color='#777777', linestyle='-')
# plt.minorticks_on() # turn minor gridlines on
# plt.grid(b=True, which='minor', color='#aaaaaa', linestyle='dashed', alpha=0.5)
# plt.savefig('visualizations/dino_size_over_time.png', dpi=300) # save before show, or else a new fig is generated
# plt.show() # displays the plot

# generate visualization
y = data.Location
x = data.MYA
s = (data.Size + 1)**2
colors = {'Theropoda':'r', 'Sauropoda':'y', 'Ornithopoda':'g', 'Marginocephalia':'c', 'Thyreophora':'m'}
c = [colors[val] for val in data.Order]

#fig = plt.figure()
fig, ax = plt.subplots(figsize=(20, 24))
plt.ylabel('Primary Fossil Location')
plt.xlabel('Time Evolved (millions of years ago)')
plt.title('Dinosaur Size by Country, Time, and Order')
plt.axis([235, 65, 48, -1])
ax.scatter(x, y, s, c, alpha=0.2, edgecolors=c)
ax.set_axisbelow(True) # set axis below the points
ax.grid(b=True, which='major', color='#777777', linestyle='-', alpha=0.5)
ax.legend()
plt.savefig('visualizations/test.png', dpi=500)
plt.show()
