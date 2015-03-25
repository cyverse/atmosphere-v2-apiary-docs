var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

var paths = {
  files: [
    './src/header.md',
    './src/allocations.md',
    './src/identities.md',
    //'./src/group.md',
    './src/images.md',
    './src/image_bookmarks.md',
    //'./src/image_requests.md',
    './src/image_tags.md',
    './src/instances.md',
    //'./src/instance_actions.md',
    //'./src/instance_history.md'
    './src/instance_tags.md',
    //'./src/maintenance_messages.md',
    //'./src/null_project.md',
    './src/platform_types.md',
    './src/projects.md',
    //'./src/project_images.md',
    './src/project_instances.md',
    './src/project_volumes.md',
    //'./src/profile.md',
    './src/providers.md',
    //'./src/provider_capacity.md',
    './src/provider_machines.md',
    './src/provider_sizes.md',
    './src/provider_types.md',
    './src/quotas.md',
    //'./src/status_messages.md',
    './src/tags.md',
    './src/users.md',
    './src/volumes.md'
    //'./src/volume_actions.md',
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