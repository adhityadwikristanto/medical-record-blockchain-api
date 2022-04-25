const KNN = require('ml-knn');
// https://github.com/plotly/datasets/blob/master/diabetes.csv
// https://github.com/mljs/knn
var train_dataset = [
    [6,148,72,35,0,336,627,50],
    [1,85,66,29,0,266,351,31],
    [8,183,64,0,0,233,672,32],
    [1,89,66,23,94,281,167,21],
    [0,137,40,35,168,431,2288,33],
    [5,116,74,0,0,256,201,30],
    [3,78,50,32,88,31,248,26],
    [10,115,0,0,0,353,134,29],
    [2,197,70,45,543,305,158,53],
    [8,125,96,0,0,0,232,54],
    [4,110,92,0,0,376,191,30],
    [10,168,74,0,0,38,537,34],
    [10,139,80,0,0,271,1441,57],
    [1,189,60,23,846,301,398,59],
    [5,166,72,19,175,258,587,51],
    [7,100,0,0,0,30,484,32],
    [0,118,84,47,230,458,551,31],
    [7,107,74,0,0,296,254,31],
    [1,103,30,38,83,433,183,33],
    [1,115,70,30,96,346,529,32],
    [3,126,88,41,235,393,704,27],
    [8,99,84,0,0,354,388,50],
    [7,196,90,0,0,398,451,41],
    [9,119,80,35,0,29,263,29],
    [11,143,94,33,146,366,254,51],
    [10,125,70,26,115,311,205,41],
    [7,147,76,0,0,394,257,43],
    [1,97,66,15,140,232,487,22],
    [13,145,82,19,110,222,245,57],
    [5,117,92,0,0,341,337,38],
    [5,109,75,26,0,36,546,60],
    [3,158,76,36,245,316,851,28],
    [3,88,58,11,54,248,267,22],
    [6,92,92,0,0,199,188,28],
    [10,122,78,31,0,276,512,45],
    [4,103,60,33,192,24,966,33],
    [11,138,76,0,0,332,42,35],
    [9,102,76,37,0,329,665,46],
    [2,90,68,42,0,382,503,27],
    [4,111,72,47,207,371,139,56],
    [3,180,64,25,70,34,271,26],
    [7,133,84,0,0,402,696,37],
    [7,106,92,18,0,227,235,48],
    [9,171,110,24,240,454,721,54],
    [7,159,64,0,0,274,294,40],
    [0,180,66,39,0,42,1893,25],
    [1,146,56,0,0,297,564,29],
    [2,71,70,27,0,28,586,22],
    [7,103,66,32,0,391,344,31],
    [7,105,0,0,0,0,305,24],
    [1,103,80,11,82,194,491,22],
    [1,101,50,15,36,242,526,26],
    [5,88,66,21,23,244,342,30],
    [8,176,90,34,300,337,467,58],
    [7,150,66,42,342,347,718,42],
    [1,73,50,10,0,23,248,21],
    [7,187,68,39,304,377,254,41],
    [0,100,88,60,110,468,962,31],
    [0,146,82,0,0,405,1781,44],
    [0,105,64,41,142,415,173,22],
    [2,84,0,0,0,0,304,21],
    [8,133,72,0,0,329,27,39],
    [5,44,62,0,0,25,587,36],
    [2,141,58,34,128,254,699,24],
    [7,114,66,0,0,328,258,42],
    [5,99,74,27,0,29,203,32],
    [0,109,88,30,0,325,855,38],
    [2,109,92,0,0,427,845,54],
    [1,95,66,13,38,196,334,25],
    [4,146,85,27,100,289,189,27],
    [2,100,66,20,90,329,867,28],
    [5,139,64,35,140,286,411,26],
    [13,126,90,0,0,434,583,42],
    [4,129,86,20,270,351,231,23],
    [1,79,75,30,0,32,396,22],
    [1,0,48,20,0,247,14,22],
    [7,62,78,0,0,326,391,41],
    [5,95,72,33,0,377,37,27],
    [0,131,0,0,0,432,27,26],
    [2,112,66,22,0,25,307,24],
    [3,113,44,13,0,224,14,22],
    [2,74,0,0,0,0,102,22],
    [7,83,78,26,71,293,767,36],
    [0,101,65,28,0,246,237,22],
    [5,137,108,0,0,488,227,37],
    [2,110,74,29,125,324,698,27],
    [13,106,72,54,0,366,178,45],
    [2,100,68,25,71,385,324,26],
    [15,136,70,32,110,371,153,43],
    [1,107,68,19,0,265,165,24],
    [1,80,55,0,0,191,258,21],
    [4,123,80,15,176,32,443,34],
    [7,81,78,40,48,467,261,42],
    [4,134,72,0,0,238,277,60],
    [2,142,82,18,64,247,761,21],
    [6,144,72,27,228,339,255,40],
    [2,92,62,28,0,316,13,24],
    [1,71,48,18,76,204,323,22],
    [6,93,50,30,64,287,356,23],
    [1,122,90,51,220,497,325,31],
    [1,163,72,0,0,39,1222,33],
    [1,151,60,0,0,261,179,22],
    [0,125,96,0,0,225,262,21],
    [1,81,72,18,40,266,283,24],
    [2,85,65,0,0,396,93,27],
    [1,126,56,29,152,287,801,21],
    [1,96,122,0,0,224,207,27],
    [4,144,58,28,140,295,287,37],
    [3,83,58,31,18,343,336,25],
    [0,95,85,25,36,374,247,24],
    [3,171,72,33,135,333,199,24],
    [8,155,62,26,495,34,543,46],
    [1,89,76,34,37,312,192,23],
    [4,76,62,0,0,34,391,25],
    [7,160,54,32,175,305,588,39],
    [4,146,92,0,0,312,539,61],
    [5,124,74,0,0,34,22,38],
    [5,78,48,0,0,337,654,25],
    [4,97,60,23,0,282,443,22],
    [4,99,76,15,51,232,223,21],
    [0,162,76,56,100,532,759,25],
    [6,111,64,39,0,342,26,24],
    [2,107,74,30,100,336,404,23],
    [5,132,80,0,0,268,186,69],
    [0,113,76,0,0,333,278,23],
    [1,88,30,42,99,55,496,26],
    [3,120,70,30,135,429,452,30],
    [1,118,58,36,94,333,261,23],
    [1,117,88,24,145,345,403,40],
    [0,105,84,0,0,279,741,62],
    [4,173,70,14,168,297,361,33],
    [9,122,56,0,0,333,1114,33],
    [3,170,64,37,225,345,356,30],
    [8,84,74,31,0,383,457,39],
    [2,96,68,13,49,211,647,26],
    [2,125,60,20,140,338,88,31],
    [0,100,70,26,50,308,597,21],
    [0,93,60,25,92,287,532,22],
    [0,129,80,0,0,312,703,29],
    [5,105,72,29,325,369,159,28],
    [3,128,78,0,0,211,268,55],
    [5,106,82,30,0,395,286,38],
    [2,108,52,26,63,325,318,22],
    [10,108,66,0,0,324,272,42],
    [4,154,62,31,284,328,237,23],
    [0,102,75,23,0,0,572,21],
    [9,57,80,37,0,328,96,41],
    [2,106,64,35,119,305,14,34],
    [5,147,78,0,0,337,218,65],
    [2,90,70,17,0,273,85,22],
    [1,136,74,50,204,374,399,24],
    [4,114,65,0,0,219,432,37],
    [9,156,86,28,155,343,1189,42],
    [1,153,82,42,485,406,687,23],
    [8,188,78,0,0,479,137,43],
    [7,152,88,44,0,50,337,36],
    [2,99,52,15,94,246,637,21],
    [1,109,56,21,135,252,833,23],
    [2,88,74,19,53,29,229,22],
    [17,163,72,41,114,409,817,47],
    [4,151,90,38,0,297,294,36],
    [7,102,74,40,105,372,204,45],
    [0,114,80,34,285,442,167,27],
    [2,100,64,23,0,297,368,21],
    [0,131,88,0,0,316,743,32],
    [6,104,74,18,156,299,722,41],
    [3,148,66,25,0,325,256,22],
    [4,120,68,0,0,296,709,34],
    [4,110,66,0,0,319,471,29],
    [3,111,90,12,78,284,495,29],
    [6,102,82,0,0,308,18,36],
    [6,134,70,23,130,354,542,29],
    [2,87,0,23,0,289,773,25],
    [1,79,60,42,48,435,678,23],
    [2,75,64,24,55,297,37,33],
    [8,179,72,42,130,327,719,36],
    [6,85,78,0,0,312,382,42],
    [0,129,110,46,130,671,319,26],
    [5,143,78,0,0,45,19,47],
    [5,130,82,0,0,391,956,37],
    [6,87,80,0,0,232,84,32],
    [0,119,64,18,92,349,725,23],
    [1,0,74,20,23,277,299,21],
    [5,73,60,0,0,268,268,27],
    [4,141,74,0,0,276,244,40],
    [7,194,68,28,0,359,745,41],
    [8,181,68,36,495,301,615,60],
    [1,128,98,41,58,32,1321,33],
    [8,109,76,39,114,279,64,31],
    [5,139,80,35,160,316,361,25],
    [3,111,62,0,0,226,142,21],
    [9,123,70,44,94,331,374,40],
    [7,159,66,0,0,304,383,36],
    [11,135,0,0,0,523,578,40],
    [8,85,55,20,0,244,136,42],
    [5,158,84,41,210,394,395,29],
    [1,105,58,0,0,243,187,21],
    [3,107,62,13,48,229,678,23],
    [4,109,64,44,99,348,905,26],
    [4,148,60,27,318,309,15,29],
    [0,113,80,16,0,31,874,21],
    [1,138,82,0,0,401,236,28],
    [0,108,68,20,0,273,787,32],
    [2,99,70,16,44,204,235,27],
    [6,103,72,32,190,377,324,55],
    [5,111,72,28,0,239,407,27],
    [8,196,76,29,280,375,605,57],
    [5,162,104,0,0,377,151,52],
    [1,96,64,27,87,332,289,21],
    [7,184,84,33,0,355,355,41],
    [2,81,60,22,0,277,29,25],
    [0,147,85,54,0,428,375,24],
    [7,179,95,31,0,342,164,60],
    [0,140,65,26,130,426,431,24],
    [9,112,82,32,175,342,26,36],
    [12,151,70,40,271,418,742,38],
    [5,109,62,41,129,358,514,25],
    [6,125,68,30,120,30,464,32],
    [5,85,74,22,0,29,1224,32],
    [5,112,66,0,0,378,261,41],
    [0,177,60,29,478,346,1072,21],
    [2,158,90,0,0,316,805,66],
    [7,119,0,0,0,252,209,37],
    [7,142,60,33,190,288,687,61],
    [1,100,66,15,56,236,666,26],
    [1,87,78,27,32,346,101,22],
    [0,101,76,0,0,357,198,26],
    [3,162,52,38,0,372,652,24],
    [4,197,70,39,744,367,2329,31],
    [0,117,80,31,53,452,89,24],
    [4,142,86,0,0,44,645,22],
    [6,134,80,37,370,462,238,46],
    [1,79,80,25,37,254,583,22],
    [4,122,68,0,0,35,394,29],
    [3,74,68,28,45,297,293,23],
    [4,171,72,0,0,436,479,26],
    [7,181,84,21,192,359,586,51],
    [0,179,90,27,0,441,686,23],
    [9,164,84,21,0,308,831,32],
    [0,104,76,0,0,184,582,27],
    [1,91,64,24,0,292,192,21],
    [4,91,70,32,88,331,446,22],
    [3,139,54,0,0,256,402,22],
    [6,119,50,22,176,271,1318,33],
    [2,146,76,35,194,382,329,29],
    [9,184,85,15,0,30,1213,49],
    [10,122,68,0,0,312,258,41],
    [0,165,90,33,680,523,427,23],
    [9,124,70,33,402,354,282,34],
    [1,111,86,19,0,301,143,23],
    [9,106,52,0,0,312,38,42],
    [2,129,84,0,0,28,284,27],
    [2,90,80,14,55,244,249,24],
    [0,86,68,32,0,358,238,25],
    [12,92,62,7,258,276,926,44],
    [1,113,64,35,0,336,543,21],
    [3,111,56,39,0,301,557,30],
    [2,114,68,22,0,287,92,25],
    [1,193,50,16,375,259,655,24],
    [11,155,76,28,150,333,1353,51],
    [3,191,68,15,130,309,299,34],
    [3,141,0,0,0,30,761,27],
    [4,95,70,32,0,321,612,24],
    [3,142,80,15,0,324,2,63],
    [4,123,62,0,0,32,226,35],
    [5,96,74,18,67,336,997,43],
    [0,138,0,0,0,363,933,25],
    [2,128,64,42,0,40,1101,24],
    [0,102,52,0,0,251,78,21],
    [2,146,0,0,0,275,24,28],
    [10,101,86,37,0,456,1136,38],
    [2,108,62,32,56,252,128,21],
    [3,122,78,0,0,23,254,40],
    [1,71,78,50,45,332,422,21],
    [13,106,70,0,0,342,251,52],
    [2,100,70,52,57,405,677,25],
    [7,106,60,24,0,265,296,29],
    [0,104,64,23,116,278,454,23],
    [5,114,74,0,0,249,744,57],
    [2,108,62,10,278,253,881,22],
    [0,146,70,0,0,379,334,28],
    [10,129,76,28,122,359,28,39],
    [7,133,88,15,155,324,262,37],
    [7,161,86,0,0,304,165,47],
    [2,108,80,0,0,27,259,52],
    [7,136,74,26,135,26,647,51],
    [5,155,84,44,545,387,619,34],
    [1,119,86,39,220,456,808,29],
    [4,96,56,17,49,208,34,26],
    [5,108,72,43,75,361,263,33],
    [0,78,88,29,40,369,434,21],
    [0,107,62,30,74,366,757,25],
    [2,128,78,37,182,433,1224,31],
    [1,128,48,45,194,405,613,24],
    [0,161,50,0,0,219,254,65],
    [6,151,62,31,120,355,692,28],
    [2,146,70,38,360,28,337,29],
    [0,126,84,29,215,307,52,24],
    [14,100,78,25,184,366,412,46],
    [8,112,72,0,0,236,84,58],
    [0,167,0,0,0,323,839,30],
    [2,144,58,33,135,316,422,25],
    [5,77,82,41,42,358,156,35],
    [5,115,98,0,0,529,209,28],
    [3,150,76,0,0,21,207,37],
    [2,120,76,37,105,397,215,29],
    [10,161,68,23,132,255,326,47],
    [0,137,68,14,148,248,143,21],
    [0,128,68,19,180,305,1391,25],
    [2,124,68,28,205,329,875,30],
    [6,80,66,30,0,262,313,41],
    [0,106,70,37,148,394,605,22],
    [2,155,74,17,96,266,433,27],
    [3,113,50,10,85,295,626,25],
    [7,109,80,31,0,359,1127,43],
    [2,112,68,22,94,341,315,26],
    [3,99,80,11,64,193,284,30],
    [3,182,74,0,0,305,345,29],
    [3,115,66,39,140,381,15,28],
    [6,194,78,0,0,235,129,59],
    [4,129,60,12,231,275,527,31],
    [3,112,74,30,0,316,197,25],
    [0,124,70,20,0,274,254,36],
    [13,152,90,33,29,268,731,43],
    [2,112,75,32,0,357,148,21],
    [1,157,72,21,168,256,123,24],
    [1,122,64,32,156,351,692,30],
    [10,179,70,0,0,351,2,37],
    [2,102,86,36,120,455,127,23],
    [6,105,70,32,68,308,122,37],
    [8,118,72,19,0,231,1476,46],
    [2,87,58,16,52,327,166,25],
    [1,180,0,0,0,433,282,41],
    [12,106,80,0,0,236,137,44],
    [1,95,60,18,58,239,26,22],
    [0,165,76,43,255,479,259,26],
    [0,117,0,0,0,338,932,44],
    [5,115,76,0,0,312,343,44],
    [9,152,78,34,171,342,893,33],
    [7,178,84,0,0,399,331,41],
    [1,130,70,13,105,259,472,22],
    [1,95,74,21,73,259,673,36],
    [1,0,68,35,0,32,389,22],
    [5,122,86,0,0,347,29,33],
    [8,95,72,0,0,368,485,57],
    [8,126,88,36,108,385,349,49],
    [1,139,46,19,83,287,654,22],
    [3,116,0,0,0,235,187,23],
    [3,99,62,19,74,218,279,26],
    [5,0,80,32,0,41,346,37],
    [4,92,80,0,0,422,237,29],
    [4,137,84,0,0,312,252,30],
    [3,61,82,28,0,344,243,46],
    [1,90,62,12,43,272,58,24],
    [3,90,78,0,0,427,559,21],
    [9,165,88,0,0,304,302,49],
    [1,125,50,40,167,333,962,28],
    [13,129,0,30,0,399,569,44],
    [12,88,74,40,54,353,378,48],
    [1,196,76,36,249,365,875,29],
    [5,189,64,33,325,312,583,29],
    [5,158,70,0,0,298,207,63],
    [5,103,108,37,0,392,305,65],
    [4,146,78,0,0,385,52,67],
    [4,147,74,25,293,349,385,30],
    [5,99,54,28,83,34,499,30],
    [6,124,72,0,0,276,368,29],
    [0,101,64,17,0,21,252,21],
    [3,81,86,16,66,275,306,22],
    [1,133,102,28,140,328,234,45],
    [3,173,82,48,465,384,2137,25],
    [0,118,64,23,89,0,1731,21],
    [0,84,64,22,66,358,545,21],
    [2,105,58,40,94,349,225,25],
    [2,122,52,43,158,362,816,28],
    [12,140,82,43,325,392,528,58],
    [0,98,82,15,84,252,299,22],
    [1,87,60,37,75,372,509,22],
    [4,156,75,0,0,483,238,32],
    [0,93,100,39,72,434,1021,35],
    [1,107,72,30,82,308,821,24],
    [0,105,68,22,0,20,236,22],
    [1,109,60,8,182,254,947,21],
    [1,90,62,18,59,251,1268,25],
    [1,125,70,24,110,243,221,25],
    [1,119,54,13,50,223,205,24],
    [5,116,74,29,0,323,66,35],
    [8,105,100,36,0,433,239,45],
    [5,144,82,26,285,32,452,58],
    [3,100,68,23,81,316,949,28],
    [1,100,66,29,196,32,444,42],
    [5,166,76,0,0,457,34,27],
    [1,131,64,14,415,237,389,21],
    [4,116,72,12,87,221,463,37],
    [4,158,78,0,0,329,803,31],
    [2,127,58,24,275,277,16,25],
    [3,96,56,34,115,247,944,39],
    [0,131,66,40,0,343,196,22],
    [3,82,70,0,0,211,389,25],
    [3,193,70,31,0,349,241,25],
    [4,95,64,0,0,32,161,31],
    [6,137,61,0,0,242,151,55],
    [5,136,84,41,88,35,286,35],
    [9,72,78,25,0,316,28,38],
    [5,168,64,0,0,329,135,41],
    [2,123,48,32,165,421,52,26],
    [4,115,72,0,0,289,376,46],
    [0,101,62,0,0,219,336,25],
    [8,197,74,0,0,259,1191,39],
    [1,172,68,49,579,424,702,28],
    [6,102,90,39,0,357,674,28],
    [1,112,72,30,176,344,528,25],
    [1,143,84,23,310,424,1076,22],
    [1,143,74,22,61,262,256,21],
    [0,138,60,35,167,346,534,21],
    [3,173,84,33,474,357,258,22],
    [1,97,68,21,0,272,1095,22],
    [4,144,82,32,0,385,554,37],
    [1,83,68,0,0,182,624,27],
    [3,129,64,29,115,264,219,28],
    [1,119,88,41,170,453,507,26],
    [2,94,68,18,76,26,561,21],
    [0,102,64,46,78,406,496,21],
    [2,115,64,22,0,308,421,21],
    [8,151,78,32,210,429,516,36],
    [4,184,78,39,277,37,264,31],
    [0,94,0,0,0,0,256,25],
    [1,181,64,30,180,341,328,38],
    [0,135,94,46,145,406,284,26],
    [1,95,82,25,180,35,233,43],
    [2,99,0,0,0,222,108,23],
    [3,89,74,16,85,304,551,38],
    [1,80,74,11,60,30,527,22],
    [2,139,75,0,0,256,167,29],
    [1,90,68,8,0,245,1138,36],
    [0,141,0,0,0,424,205,29],
    [12,140,85,33,0,374,244,41],
    [5,147,75,0,0,299,434,28],
    [1,97,70,15,0,182,147,21],
    [6,107,88,0,0,368,727,31],
    [0,189,104,25,0,343,435,41],
    [2,83,66,23,50,322,497,22],
    [4,117,64,27,120,332,23,24],
    [8,108,70,0,0,305,955,33],
    [4,117,62,12,0,297,38,30],
    [0,180,78,63,14,594,242,25],
    [1,100,72,12,70,253,658,28],
    [0,95,80,45,92,365,33,26],
    [0,104,64,37,64,336,51,22],
    [0,120,74,18,63,305,285,26],
    [1,82,64,13,95,212,415,23],
    [2,134,70,0,0,289,542,23],
    [0,91,68,32,210,399,381,25],
    [2,119,0,0,0,196,832,72],
    [2,100,54,28,105,378,498,24],
    [14,175,62,30,0,336,212,38],
    [1,135,54,0,0,267,687,62],
    [5,86,68,28,71,302,364,24],
    [10,148,84,48,237,376,1001,51],
    [9,134,74,33,60,259,46,81],
    [9,120,72,22,56,208,733,48],
    [1,71,62,0,0,218,416,26],
    [8,74,70,40,49,353,705,39],
    [5,88,78,30,0,276,258,37],
    [10,115,98,0,0,24,1022,34],
    [0,124,56,13,105,218,452,21],
    [0,74,52,10,36,278,269,22],
    [0,97,64,36,100,368,6,25],
    [8,120,0,0,0,30,183,38],
    [6,154,78,41,140,461,571,27],
    [1,144,82,40,0,413,607,28],
    [0,137,70,38,0,332,17,22],
    [0,119,66,27,0,388,259,22],
    [7,136,90,0,0,299,21,50],
    [4,114,64,0,0,289,126,24],
    [0,137,84,27,0,273,231,59],
    [2,105,80,45,191,337,711,29],
    [7,114,76,17,110,238,466,31],
    [8,126,74,38,75,259,162,39],
    [4,132,86,31,0,28,419,63],
    [3,158,70,30,328,355,344,35],
    [0,123,88,37,0,352,197,29],
    [4,85,58,22,49,278,306,28],
    [0,84,82,31,125,382,233,23],
    [0,145,0,0,0,442,63,31],
    [0,135,68,42,250,423,365,24],
    [1,139,62,41,480,407,536,21],
    [0,173,78,32,265,465,1159,58],
    [4,99,72,17,0,256,294,28],
    [8,194,80,0,0,261,551,67],
    [2,83,65,28,66,368,629,24],
    [2,89,90,30,0,335,292,42],
    [4,99,68,38,0,328,145,33],
    [4,125,70,18,122,289,1144,45],
    [3,80,0,0,0,0,174,22],
    [6,166,74,0,0,266,304,66],
    [5,110,68,0,0,26,292,30],
    [2,81,72,15,76,301,547,25],
    [7,195,70,33,145,251,163,55],
    [6,154,74,32,193,293,839,39]    
];

var train_labels = [
    1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,
    0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,
    0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,
    0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,1,
    0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,
    1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,
    0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,
    0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,
    0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,
    0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,
    0,0,0,1,0,0,0,0,1,0];

const knn = new KNN(train_dataset, train_labels, { k: 4 }); // consider 2 nearest neighbors

class kNearest {
    constructor() {
        this.model = knn;
        this.kesimpulan = "Belum Diprediksi";
    }

    prediksi(Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age){
        
        var test_dataset = [Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, 
                            DiabetesPedigreeFunction, Age];
        
        var hasil = knn.predict(test_dataset);
                       
        if(hasil === 0){
            this.kesimpulan = "Bukan Diabetes";
        }else{
            this.kesimpulan = "Diabetes";
        }
        
        return this.kesimpulan;
    }
}

module.exports = kNearest;