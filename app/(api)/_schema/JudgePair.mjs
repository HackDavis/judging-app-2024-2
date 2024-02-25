const JudgePair = {
  bsonType: 'object',
  title: 'JudgePair Object Validation',
  required: ['type', 'judge_ids'],
  properties: {
    _id: {
      bsonType: 'objectId',
      description: '_id must be an ObjectId',
    },
    type: {
      enum: ['TT', 'TN', 'D'],
      description:
        'type must be either TT (tech-tech), TN (tech-nontech), or D (design).',
    },
    judge_ids: {
      bsonType: 'array',
      items: {
        bsonType: 'objectId',
      },
      description: 'judge_ids must be an array of ObjectIds',
    },
    team_ids: {
      bsonType: ['array', 'null'],
      items: {
        bsonType: 'objectId',
      },
      description: 'team_ids must be an array of ObjectIds',
    },
  },
  additionalProperties: false,
};

export default JudgePair;
