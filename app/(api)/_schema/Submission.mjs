const Submission = {
  bsonType: 'object',
  title: 'Submission Object Validation',
  required: ['judge_id', 'team_id', 'scores', 'correlations'],
  properties: {
    _id: {
      bsonType: 'objectId',
      description: '_id must be an ObjectId',
    },
    judge_id: {
      bsonType: 'objectId',
      description: 'judge_id must be an ObjectId',
    },
    team_id: {
      bsonType: 'objectId',
      description: 'team_id must be an ObjectId',
    },
    scores: {
      bsonType: 'array',
      description: 'scores must be an array of integers',
      minItems: 5,
      items: {
        bsonType: 'int',
      },
    },
    correlations: {
      bsonType: 'array',
      description: 'correlations must be an array of integers',
      minItems: 1,
      items: {
        bsonType: 'int',
      },
    },
    comments: {
      bsonType: ['string', 'null'],
      description: 'comments must be a string',
    },
  },
  additionalProperties: false,
};

export default Submission;
