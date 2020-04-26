from spreadsheet import dinosauria

import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as pyplot
import matplotlib.cbook as cbook


# extract data to build visualizations
data = pd.DataFrame(dinosauria)