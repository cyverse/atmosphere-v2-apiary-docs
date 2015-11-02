var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');

var paths = {
  files: [
    './src/header.md',
    './src/allocations.md',
    //'./src/boot_scripts.md',
    //'./src/credentials.md',
    //'./src/email_feedback.md',
    //'./src/email_request_resources.md',
    //'./src/email_support.md',
    //'./src/group.md',
    './src/identities.md',
    './src/images.md',
    './src/image_versions.md',
    //'./src/image_version_boot_scripts.md',
    //'./src/image_version_licenses.md',
    //'./src/image_version_memberships.md',
    './src/image_bookmarks.md',
    './src/image_tags.md',
    //'./src/machine_requests.md',
    './src/metrics.md',
    './src/instances.md',
    //'./src/instance_actions.md',
    './src/instance_histories.md'
    './src/instance_tags.md',
    //'./src/licenses.md',
    //'./src/maintenance_messages.md',
    //'./src/null_project.md',
    './src/platform_types.md',
    './src/projects.md',
    './src/project_instances.md',
    './src/project_volumes.md',
    //'./src/project_images.md',
    //'./src/profile.md',
    './src/providers.md',
    //'./src/provider_capacity.md',
    './src/provider_machines.md',
    './src/provider_types.md',
    './src/quotas.md',
    './src/resource_requests.md',
    './src/service_unavailable_test.md',
    './src/sizes.md',
    //'./src/status_messages.md',
    // './src/status_types.md',
    './src/tags.md',
    //'./src/tokens.md',
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
