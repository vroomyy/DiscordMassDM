function FindModule(item)
{
    var req = window.webpackJsonp.push([[], {'__extra_id__': (module, exports, req) => module.exports = req}, [['__extra_id__']]]);

    for (const in1 in req.c) {
        if (req.c.hasOwnProperty(in1)) {
            const m = req.c[in1].exports;
            if (m && m.__esModule && m.default && m.default[item]) return m.default;
            if (m && m[item]) return m;
        }
    }
}

let guildid = "id";
let message = "test"
let sleep_after_message = 3000;
var memberList = FindModule("getMembers").getMembers(guildid);
memberList.reverse();

async function massDM()
{
    memberList.forEach(function (member, index) {
        setTimeout(async function () {
        if(member.userId == FindModule("getCurrentUser").getCurrentUser().id) return;

        let channelid = await FindModule("openPrivateChannel").openPrivateChannel(member.userId);

        FindModule('sendMessage').sendMessage(channelid, {content: `Hello, <@${member.userId}>\n${message}`}).then(async x => {
        }).catch(err => {console.error(err)});

    }, index * sleep_after_message);
    });
}

await massDM();