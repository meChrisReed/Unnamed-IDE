import recursiveReaddir from  'recursive-readdir'

const asyncLoadProject = path => (dispatch, getState) => {
	const a = performance.now()
	recursiveReaddir(path, function (err, files) {
	  // Files is an array of filename
		const b = performance.now()
	  console.log(files, b-a);
	});
	dispatch({
		type: 'LOAD_PROJECT'
	})
}

export default asyncLoadProject

/*
Start by getting a recursive list of all files and their paths
[
	'/Users/creed/Code/Unnamed-Ide/app/index.js',
	...
]

For performance:
* Establish the top depth files and folders,
* in a worker, keep parsing out all of the files
*/
