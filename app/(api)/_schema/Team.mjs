const Team = {
  bsonType: 'object',
  title: 'Team Object Validation',
  properties: {
    _id: {
      bsonType: 'objectId',
      description: '_id must be an ObjectId',
    },
    number: {
      bsonType: 'int',
      description: 'number must be an integer',
    },
    tracks: {
      bsonType: 'array',
      items: {
        bsonType: 'string',
      },
      description: 'tracks must be an array of strings',
    },
    name: {
      bsonType: 'string',
      description: 'name must be a string',
    },
    tech_emphasis: {
      bsonType: 'int',
      description: 'tech_emphasis must be an integer',
    },
    design_emphasis: {
      bsonType: 'int',
      description: 'design_emphasis must be an integer',
    },
    judge_pairs: {
      bsonType: ['array', 'null'],
      items: {
        bsonType: 'objectId',
      },
      description: 'judge_pairs must be an array of ObjectIds or null',
    },
    judge_submissions: {
      bsonType: ['array', 'null'],
      items: {
        bsonType: 'objectId',
      },
      description: 'judge_submissions must be an array of ObjectIds or null',
    },
  },
  additionalProperties: false,
};

export default Team;
