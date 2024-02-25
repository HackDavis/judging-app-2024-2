const Submission = {
  bsonType: 'object',
  title: 'Submission Object Validation',
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
      bsonType: 'object',
      description: 'scores must be a JSON object',
    },
    correlations: {
      bsonType: 'object',
      description: 'correlations must be a JSON object',
    },
    comments: {
      bsonType: ['string', 'null'],
      description: 'comments must be a string',
    },
  },
  additionalProperties: false,
};

export default Submission;
