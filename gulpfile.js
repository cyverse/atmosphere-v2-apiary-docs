var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

var paths = {
  files: [
    './src/header.md',
    './src/tag.md',
    './src/images.md',
    './src/image_requests.md',
    //'./src/group.md',
    './src/profile.md',
    './src/identity.md',
    './src/instance.md',
    './src/instance_actions.md',
    './src/provider.md',
    './src/provider_capacity.md',
    './src/allocation.md',
    './src/provider_sizes.md',
    './src/volume.md',
    './src/volume_actions.md',
    './src/project.md',
    './src/project_instances.md',
    './src/project_volumes.md',
    './src/project_images.md',
    './src/null_project.md',
    './src/status_messages.md',
    './src/maintenance_messages.md',
    './src/quota_requests.md',
    './src/instance_history.md'
  ]
};

// Apiary will connect to GitHub and use the apiary.apib file to display documentation
// to end users.  The file is required to have the name apiary.apib by Apiary.
gulp.task('create_apiary_blueprint', function(){
  return gulp.src(paths.files)
    .pipe(concat('apiary.apib'))
    .pipe(gulp.dest('./'))
    .pipe(notify({ message: 'Apiary Blueprint Build task complete' }));
});

gulp.task('default', function(){
  gulp.start('create_apiary_blueprint');
});