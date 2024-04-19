const JudgePair = {
  bsonType: 'object',
  title: 'JudgePair Object Validation',
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
  },
  additionalProperties: false,
};

export default JudgePair;