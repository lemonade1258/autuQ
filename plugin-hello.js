"use strict"
const { segment } = require("oicq")
const { bot } = require("./index")
const data = require("./schedule")
// hello world
bot.on("message", function (msg) {
	if (msg.raw_message === "hello")
		msg.reply("hello world", true) //改为false则不会引用
})

var flag = false

bot.on("message", function (msg) {
	if (msg.raw_message === "你好小i" && msg.sender.user_id !== 1938119196 && msg.sender.user_id !== 2774269489) {
		msg.reply("已被唤醒", false)
		flag = true
	} else if (msg.raw_message.includes("结束") || msg.raw_message.includes("闭嘴") && msg.sender.user_id !== 1938119196 && msg.sender.user_id !== 2774269489) {
		msg.reply("拜了个拜", false)
		flag = false
	} else if (flag && msg.sender.user_id !== 1938119196 && msg.sender.user_id !== 2774269489) {
		const fs = require('fs');
		var msg1 = { sender: msg.raw_message }

		try {
			fs.writeFileSync('data.json', JSON.stringify(msg1));
			console.log("JSON data is saved.");
		} catch (error) {
			console.error(err);
		}

		const { exec } = require('child_process');
		const iconv = require('iconv-lite');

		exec('python robot.py', { encoding: 'buffer' }, (error, stdout) => {
			console.log('stdout', stdout.toString())
			console.log('stdout1', iconv.decode(stdout, 'cp936'));
			msg.reply(iconv.decode(stdout, 'cp936'), true)
		});
	}
})

bot.on("message", function (msg) {
	if (msg.raw_message.includes("天气") && msg.raw_message.length <= 6) {
		var index = 0;
		var mw = "今天";
		if (msg.raw_message.includes("明")) {
			index++;
			mw = "明天"
		}
		else if (msg.raw_message.includes("大后")) {
			index += 3;
			mw = "大后天"
		}
		else if (msg.raw_message.includes("后")) {
			index += 2;
			mw = "后天"
		}
		var axios = require('axios');
		var qs = require('qs');
		var data = qs.stringify({});
		var config;
		if (msg.sender.user_id === 382492218 || msg.sender.user_id === 2752900447) {
			config = {
				method: 'get',
				url: 'https://restapi.amap.com/v3/weather/weatherInfo?extensions=all&key=0a53d71fd6555c37cf58a1f2936a5884&city=230203',
				headers: {},
				data: data
			};
		} else {
			config = {
				method: 'get',
				url: 'https://restapi.amap.com/v3/weather/weatherInfo?extensions=all&key=0a53d71fd6555c37cf58a1f2936a5884&city=341102',
				headers: {},
				data: data
			};
		}

		function p_axios(n_config) {
			return new Promise(function (resolve, reject) {
				axios(n_config)
					.then(function (response) {
						return resolve(response.data.forecasts[0].casts)
					})
					.catch(function (error) {
						return reject(error)
					})
			})
		}
		p_axios(config).then((result) => {
			console.log('result[index]', result[index])
			var r = result[index]
			var b = ""
			if (r.week == 1) b = "星期一";
			else if (r.week == 2) b = "星期二";
			else if (r.week == 3) b = "星期三";
			else if (r.week == 4) b = "星期四";
			else if (r.week == 5) b = "星期五";
			else if (r.week == 6) b = "星期六";
			else if (r.week == 7) b = "星期日";
			var word = mw + "日期为" + r.date + "\n" + b + "\n白天" + r.dayweather + "，气温" + r.daytemp + "℃，" + r.daywind + "风，风力" + r.daypower + "级\n夜间" + r.nightweather + "，气温" + r.nighttemp + "℃，" + r.nightwind + "风，风力" + r.nightpower + "级"
			if (r.dayweather.search("雨") !== -1 || r.dayweather.search("雪") !== -1) word += "\n请注意带伞！！！";
			msg.reply(word, false)
		})
			.catch((err) => console.log(err.message))

	}
})

bot.on("message", function (msg) {
	if (msg.raw_message === "自我介绍")
		msg.reply("大家好，我刘明伟", true) //改为false则不会引用
})


// 今日课表
bot.on("message", function (msg) {
	if (msg.raw_message.includes("课表") || msg.raw_message.includes("课程表")) {
		var mw = "当前";
		var weekw = "";
		var d1 = new Date();
		var d2 = new Date("2022/08/29 00:00:00");
		var rq = d1 - d2;
		var s1 = Math.ceil(rq / (24 * 60 * 60 * 1000));
		if (msg.raw_message.includes("明")) {
			s1++;
			mw = "明天"
		}
		else if (msg.raw_message.includes("大后")) {
			s1 += 3;
			mw = "大后天"
		}
		else if (msg.raw_message.includes("外后")) {
			s1 += 4;
			mw = "外后天"
		}
		else if (msg.raw_message.includes("后")) {
			s1 += 2;
			mw = "后天"
		}
		var s2 = Math.ceil(s1 / 7);
		var word = "";
		var user;
		var course;
		var flag = true;// 判断是否有消息发送者信息

		for (var i = 0; i < data.user.length; i++) {
			if (data.user[i].Qid === msg.sender.user_id) {
				user = data.user[i];
				word += "你好，" + data.user[i].name + " ";
				break;
			}
		}

		if (typeof (user) == "undefined") {
			flag = false;
		} else {
			if (user.class === 1) {
				console.log('这是一班的')
				course = data.course
			} else if (user.class === 2) {
				console.log('这是二班的')
				course = data.course2
			}
		}
		if (s1 % 7 == 0) weekw = "星期天";
		else if (s1 % 7 == 1) weekw = "星期一";
		else if (s1 % 7 == 2) weekw = "星期二";
		else if (s1 % 7 == 3) weekw = "星期三";
		else if (s1 % 7 == 4) weekw = "星期四";
		else if (s1 % 7 == 5) weekw = "星期五";
		else if (s1 % 7 == 6) weekw = "星期六";
		if (s2 & 1) word += mw + "为第" + s2 + "周，单周，本学期第" + s1 + "天，" + weekw + "\n";
		else word += mw + "为第" + s2 + "周，双周，本学期第" + s1 + "天，" + weekw + "\n";

		if (!flag) word += "暂无你的信息，请联系管理~";
		else {
			var count = 0;
			for (let i in course) {
				if (course[i].week === s1 % 7 && course[i].start <= s2 && course[i].end >= s2 && (!((course[i].code ^ s2) & 1) || !course[i].code)) {
					if (!course[i].isX) {
						word += "第" + (course[i].time * 2 - 1) + "~" + course[i].time * 2 + "节：" + course[i].name + "  ";
						word += "地点：" + course[i].address + "\n";
						count++;
					} else if (user.X.includes(course[i].isX)) {
						word += "第" + (course[i].time * 2 - 1) + "~" + course[i].time * 2 + "节：" + course[i].name + "  ";
						word += "地点：" + course[i].address + "\n";
						count++;
					}
				}
			}
			if (count != 0) word += "共有" + count + "节课";
			else word += mw + "没有课~";
		}
		if (msg.raw_message.length <= 6)
			msg.reply(word, true) //改为false则不会引用
		else
			msg.reply("爪巴🤯", true) //改为false则不会引用
	}
}
)

// 撤回和发送群消息
bot.on("message.group", function (msg) {
	if (msg.raw_message === "dice") {
		// 撤回这条消息
		msg.recall()
		// 发送一个骰子
		msg.group.sendMsg(segment.dice())
		// 发送一个戳一戳
		msg.member.poke()
	}
})

// 接收戳一戳
bot.on("notice.group.poke", function (e) {
	if (e.target_id === this.uin)
		e.group.sendMsg("dont poke me")
})
