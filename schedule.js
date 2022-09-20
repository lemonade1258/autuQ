var data = ["", "第三~四节：计算机网络，YF4306\n第五~六节：软件工程基础，YF3405", "第三~四节：大数据，YF4106", "第一~二节：机器学习与应用，YF3405", "第一~二节：编译方法，YF1506\n第三~四节：计算机图形学，YF3204\n第七~八节：计算机网络，YF4306"];

var course = [
  { 'week': 1, 'name': '计网', 'time': 2, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF4306', 'isX': 0 },
  { 'week': 1, 'name': '软件工程', 'time': 3, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF3405', 'isX': 0 },
  { 'week': 2, 'name': '大数据', 'time': 2, 'code': 0, 'start': 1, 'end': 8, 'address': 'YF4106', 'isX': 1 },
  { 'week': 3, 'name': '机器学习', 'time': 1, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF3405', 'isX': 0 },
  { 'week': 3, 'name': '大数据', 'time': 2, 'code': 2, 'start': 2, 'end': 8, 'address': 'YF3204', 'isX': 1 },
  { 'week': 4, 'name': '编译方法', 'time': 1, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF1506', 'isX': 0 },
  { 'week': 4, 'name': '图形学', 'time': 2, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF3204', 'isX': 2 },
  { 'week': 4, 'name': '计网', 'time': 4, 'code': 1, 'start': 1, 'end': 15, 'address': 'YF4306', 'isX': 0 }];

var course2 = [
  { 'week': 1, 'name': '大数据', 'time': 3, 'code': 0, 'start': 1, 'end': 8, 'address': 'YF4106', 'isX': 1 },
  { 'week': 2, 'name': '机器学习', 'time': 2, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF3402', 'isX': 0 },
  { 'week': 2, 'name': '计网', 'time': 3, 'code': 2, 'start': 2, 'end': 16, 'address': 'YF3405', 'isX': 0 },
  { 'week': 3, 'name': '大数据', 'time': 2, 'code': 1, 'start': 1, 'end': 7, 'address': 'YF3204', 'isX': 1 },
  { 'week': 4, 'name': '编译方法', 'time': 1, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF1506', 'isX': 1 },
  { 'week': 4, 'name': '图形学', 'time': 2, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF3204', 'isX': 2 },
  { 'week': 5, 'name': '计网', 'time': 3, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF3407', 'isX': 0 },
  { 'week': 5, 'name': '软件工程', 'time': 2, 'code': 0, 'start': 1, 'end': 16, 'address': 'YF3405', 'isX': 0 }];

var user = [{ 'Qid': 1779716932, 'class': 1, 'X': [1, 2], 'name': '茂伟' },
{ 'Qid': 3129421519, 'class': 1, 'X': [1, 2], 'name': '小龙' },
{ 'Qid': 617346328, 'class': 2, 'X': [1], 'name': '杜卷' },
{ 'Qid': 1193496137, 'class': 1, 'X': [1], 'name': '燕春' },
{ 'Qid': 2017649157, 'class': 1, 'X': [1], 'name': '书记' },
{ 'Qid': 2439082987, 'class': 1, 'X': [1, 2], 'name': '尹松' },
{ 'Qid': 3110412202, 'class': 1, 'X': [1], 'name': '谢天' },
{ 'Qid': 1472735789, 'class': 1, 'X': [1], 'name': '亚楠' },
{ 'Qid': 3161301711, 'class': 1, 'X': [1, 2], 'name': '赵杰' },
{ 'Qid': 2219253869, 'class': 2, 'X': [1], 'name': '战洲' },
{ 'Qid': 3289619859, 'class': 1, 'X': [1, 2], 'name': '孜洋' },
{ 'Qid': 2865071378, 'class': 1, 'X': [1], 'name': '杨洋' },
{ 'Qid': 2927038299, 'class': 1, 'X': [1], 'name': '明伟' },
{ 'Qid': 2752900447, 'class': 1, 'X': [1], 'name': 'root' }
];

exports.data = data;
exports.course = course;
exports.course2 = course2;
exports.user = user;