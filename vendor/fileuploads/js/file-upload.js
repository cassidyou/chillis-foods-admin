$('.dropify').dropify({
	messages: {
		'default': 'Drag and drop a file here or click',
		'replace': 'Drag and drop or click to replace',
		'remove': 'Remove',
		'error': 'Ooops, something wrong appended.'
	},
	error: {
		'fileSize': 'The file size is too big (2M max).'
	},
	tpl: {
        message:         '<div class="dropify-message"><span class="file-icon" /> <p style="font-size: 14px!important;">{{ default }}</p></div>',
       
    }
});
	
