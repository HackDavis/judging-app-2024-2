const JudgeGroup = {
  bsonType: 'object',
  title: 'JudgeGroup Object Validation',
  required: ['type'],
  properties: {
    _id: {
      bsonType: 'objectId',
      description: '_id must be an ObjectId',
    },
    type: {
      enum: ['T', 'TN', 'D'],
      description:
        'type must be either T (tech), TN (tech-nontech), or D (design).',
    },
    judge_ids: {
      bsonType: 'array',
      description: 'judge_ids must be an array of ObjectIds',
      items: {
        bsonType: 'objectId',
        description: 'judge_id must be an ObjectId',
      },
    },
  },
  additionalProperties: false,
};

export default JudgeGroup;
