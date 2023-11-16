var _0x73e1 = ['appendChild', 'href', 'value', '\x20：\x20', 'check', 'div', '黄金宝箱', 'querySelectorAll', 'block', '#wooden', 'onclick', '.kind\x20div', 's\x20ease-in', 'setItem', '#gzh', '-webkit-transform\x20', '#confirm', '#count', 'getDay', 'display', 'webkitTransition', 'onblur', '#accomplished', 'filter', 'none', '#result', '本周黑市还可获得', 'parentElement', 'style', '#specificClac', 'appent', '铂金宝箱', 'count', 'getItem', 'opacity', 'innerHTML', '#bronze', 'length', 'select', 'createElement', '#toast'];
var _0x50ca = function(_0x73e123, _0x50ca7b) {
    _0x73e123 = _0x73e123 - 0x0;
    var _0x30004a = _0x73e1[_0x73e123];
    return _0x30004a;
};
var input = $('.container\x20input'), surplus, bout, result = $(_0x50ca('0x19'))[0x0], kind = $(_0x50ca('0xb'));
let box = ['青铜宝箱', _0x50ca('0x6'), _0x50ca('0x1f')];
function submit() {
    var _0x584b73 = 0xd0c
      , _0x238f20 = 0x0
      , _0x10c5a3 = parseInt($(_0x50ca('0x16'))[0x0][_0x50ca('0x2')]);
    _0x238f20 += parseInt($(_0x50ca('0x9'))[0x0]['value']);
    _0x238f20 += parseInt($(_0x50ca('0x24'))[0x0]['value']) * 0xa;
    _0x238f20 += parseInt($('#gold')[0x0]['value']) * 0x14;
    _0x238f20 += parseInt($('#platinum')[0x0][_0x50ca('0x2')]) * 0x32;
    if (_0x10c5a3 >= 0x7d0) {
        if (_0x10c5a3 >= 0x1770) {
            _0x10c5a3 -= 0x1770;
            _0x10c5a3 = 0x35c - parseInt(_0x10c5a3 / 0x19 * 0xc);
        } else if (_0x10c5a3 >= 0xfa0) {
            _0x10c5a3 -= 0xfa0;
            _0x10c5a3 = 0x35c * 0x2 - parseInt(_0x10c5a3 / 0x19 * 0xc);
        } else {
            _0x10c5a3 -= 0x7d0;
            _0x10c5a3 = 0x35c * 0x3 - parseInt(_0x10c5a3 / 0x19 * 0xc);
        }
    } else {
        if (_0x10c5a3 >= 0x3e8) {
            _0x10c5a3 -= 0x3e8;
            _0x10c5a3 = 0x1e0 - parseInt(_0x10c5a3 / 0x19 * 0xc) + 0x35c * 0x3;
        } else if (_0x10c5a3 > 0x0) {
            _0x10c5a3 = 0x17c - parseInt(_0x10c5a3 / 0x19 * 0xc) + 0x1e0 + 0x35c * 0x3;
        } else {
            _0x10c5a3 = 0xd70;
        }
    }
    if (_0x238f20 >= _0x10c5a3) {
        _0x238f20 -= _0x10c5a3;
        bout = parseInt(_0x238f20 / _0x584b73);
        surplus = _0x584b73 - (_0x238f20 - bout * _0x584b73) + 0x64;
        bout++;
        _0x238f20 += _0x10c5a3;
    } else {
        surplus = _0x10c5a3 - _0x238f20;
        bout = 0x0;
    }
    var _0x1967db = 0x0, _0x5bf0b6 = $(_0x50ca('0x11'))[0x0][_0x50ca('0x2')], _0x5d82f3, _0x3f0ea3;
    if (kind[0x0]['check'])
        _0x1967db += 0x14;
    if (kind[0x1][_0x50ca('0x4')])
        _0x1967db += 0x14;
    if (kind[0x2]['check'])
        _0x1967db += 0x32;
    _0x5d82f3 = _0x1967db * _0x5bf0b6;
    var _0x5ea9a2 = new Date()[_0x50ca('0x12')]()
      , _0x5133af = 0x4 - _0x5ea9a2;
    if (_0x5133af == -0x1)
        _0x5133af = 0x6;
    if (_0x5133af == -0x2)
        _0x5133af = 0x5;
    _0x3f0ea3 = _0x5133af * _0x5d82f3;
    result[_0x50ca('0x23')] = '';
    result['appent']('可完成「宝箱达标」轮数', bout);
    result['appent']('当前总积分', _0x238f20);
    result[_0x50ca('0x1e')]('完成下一轮还需', surplus);
    result['appent'](_0x50ca('0x1a'), _0x3f0ea3);
    if (_0x3f0ea3 < surplus) {
        result[_0x50ca('0x1e')]('本周扣除黑市外还需', surplus - _0x3f0ea3);
        result[_0x50ca('0x1e')]('需要闯关', (surplus - _0x3f0ea3) / 2.5);
    }
}
result[_0x50ca('0x1e')] = function(_0x434e5e, _0x429738) {
    var _0x4c6c61 = document[_0x50ca('0x27')](_0x50ca('0x5'));
    var _0xa7fad5 = document[_0x50ca('0x27')]('span');
    _0xa7fad5['innerHTML'] = _0x434e5e + _0x50ca('0x3');
    var _0x48d8e7 = document[_0x50ca('0x27')]('b');
    _0x48d8e7['innerHTML'] = _0x429738;
    _0x4c6c61['appendChild'](_0xa7fad5);
    _0x4c6c61[_0x50ca('0x0')](_0x48d8e7);
    this['appendChild'](_0x4c6c61);
}
;
$('#market')[0x0]['onclick'] = function() {
    $('#minus')[0x0]['onclick'] = function() {
        this[_0x50ca('0x1b')]['children'][0x1][_0x50ca('0x2')] -= 0x1;
    }
    ;
    $('#plus')[0x0]['onclick'] = function() {
        this[_0x50ca('0x1b')]['children'][0x1][_0x50ca('0x2')] -= -0x1;
    }
    ;
    $(_0x50ca('0x1d'))[0x0]['style'][_0x50ca('0x13')] = _0x50ca('0x8');
}
;
$(_0x50ca('0x10'))[0x0][_0x50ca('0xa')] = function() {
    $('#specificClac')[0x0]['style']['display'] = _0x50ca('0x18');
    for (let _0x4e9e4a = 0x0; _0x4e9e4a < kind['length']; _0x4e9e4a++) {
        if (kind[_0x4e9e4a][_0x50ca('0x4')]) {
            localStorage[_0x50ca('0xd')](box[_0x4e9e4a], 0x1);
        } else {
            localStorage['setItem'](box[_0x4e9e4a], 0x0);
        }
    }
    localStorage['setItem'](_0x50ca('0x20'), $('#count')[0x0]['value']);
    submit();
}
;
function $(_0x44faa4) {
    return document[_0x50ca('0x7')](_0x44faa4);
}
function inputFocus() {
    if (this['value'] == '0') {
        this['value'] = '';
    }
}
function inputBlur() {
    if (this[_0x50ca('0x2')] == '')
        this['value'] = 0x0;
    submit();
}
function copy() {
    var _0x72148d = $('textarea')[0x0];
    _0x72148d[_0x50ca('0x26')]();
    document['execCommand']('Copy');
    toask('复制成功,即将跳转到微信', 0x5dc, function() {
        if (navigator['userAgent']['indexOf']('WeChat') > -0x1) {
            location[_0x50ca('0x1')] = 'https://mp.weixin.qq.com/s?__biz=Mzk0MTU3Mjc3MQ==&mid=2247483843&idx=1&sn=9ab620966ac2c47fcde6a94f68b7769e&chksm=c2d1160ff5a69f19259b1e96e77fe4a641fac6a2479add765a7fadc5facedd1c45babe391c02&token=1411740596&lang=zh_CN#rd';
        } else {
            location['href'] = 'weixin://';
        }
    });
}
function toask(_0x55aab1, _0x38d93e, _0x36a9b0) {
    var _0x1e7218 = $(_0x50ca('0x28'))[0x0];
    _0x1e7218['style'][_0x50ca('0x22')] = '1';
    _0x1e7218[_0x50ca('0x23')] = _0x55aab1;
    setTimeout(function() {
        var _0x234277 = 0.5;
        _0x1e7218[_0x50ca('0x1c')][_0x50ca('0x14')] = _0x50ca('0xf') + _0x234277 + 's\x20ease-in,\x20opacity\x20' + _0x234277 + _0x50ca('0xc');
        _0x1e7218['style']['opacity'] = '0';
        _0x36a9b0 && _0x36a9b0();
    }, _0x38d93e);
}
(function() {
    // $(_0x50ca('0xe'))[0x0]['onclick'] = copy;
    for (let _0x530fc3 = 0x0; _0x530fc3 < input[_0x50ca('0x25')]; _0x530fc3++) {
        input[_0x530fc3]['onfocus'] = inputFocus;
        input[_0x530fc3][_0x50ca('0x15')] = inputBlur;
    }
    for (let _0x30404b = 0x0; _0x30404b < kind[_0x50ca('0x25')]; _0x30404b++) {
        kind[_0x30404b][_0x50ca('0xa')] = _0x5297b4;
        let _0x1b6135 = localStorage['getItem'](box[_0x30404b]);
        if (_0x1b6135 == '1') {
            kind[_0x30404b]['check'] = !![];
            kind[_0x30404b][_0x50ca('0x1c')][_0x50ca('0x17')] = 'grayscale(0%)';
        } else {
            kind[_0x30404b][_0x50ca('0x4')] = ![];
        }
    }
    if (localStorage['getItem'](_0x50ca('0x20')) != null) {
        $('#count')[0x0][_0x50ca('0x2')] = localStorage[_0x50ca('0x21')](_0x50ca('0x20'));
    }
    if (localStorage['getItem']('boxChange') == '1') {
        toask('检测到您在黑市计算器中对宝箱的修改</br>已同步到本页面', 0xbb8, null);
        localStorage['setItem']('boxChange', 0x0);
    }
    function _0x5297b4() {
        if (this['check']) {
            this['check'] = ![];
            this['style'][_0x50ca('0x17')] = 'grayscale(100%)';
        } else {
            this[_0x50ca('0x4')] = !![];
            this['style']['filter'] = 'grayscale(0%)';
        }
    }
}());
submit();
