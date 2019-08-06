module.exports = {
  name: 'trello',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/trello',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
