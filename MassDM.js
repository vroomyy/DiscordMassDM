let request = (e) =>
 {
                        if (e && this._cache) return this._cache;
                        let t;
                        return (
                            "webpackJsonp" in window
                                ? (t = window.webpackJsonp.push([[], { [this.id]: (e, t, r) => (e.exports = r) }, [[this.id]]]))
                                : "webpackChunkdiscord_app" in window && window.webpackChunkdiscord_app.push([[this.id], {}, (e) => (t = e)]),
                            (this._cache = t)
                        );
}

let FindModule = (item)  =>
{
                        const o = request(item),
                            n = [];
                        for (let t in o.c) {
                            var m = o.c[t].exports;
                            if (m && m.__esModule && m.default && m.default[item]) return m.default;
                            if (m && m[item]) return m;
                        }
                        return t ? n : n.shift();
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
