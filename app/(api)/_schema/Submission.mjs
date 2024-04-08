import tracks from '../_data/tracks.json' assert { type: 'json' };

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
      maxItems: 5,
      items: {
        bsonType: 'int',
        minimum: 1,
        maximum: 5,
        description: 'score must be an integer',
      },
    },
    correlations: {
      bsonType: 'array',
      description: 'correlations must be an array of correlations',
      minItems: 1,
      maxItems: 4,
      items: {
        bsonType: 'object',
        required: ['track', 'score'],
        properties: {
          track: {
            enum: Object.keys(tracks),
            description: 'track must be one of the valid tracks',
          },
          score: {
            bsonType: 'int',
            minimum: 1,
            maximum: 5,
            description: 'score must be an integer between 1 and 5',
          },
        },
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
