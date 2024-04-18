import tracks from '../_data/tracks.json' assert { type: 'json' };

const Team = {
  bsonType: 'object',
  title: 'Team Object Validation',
  required: ['number', 'name', 'tracks'],
  properties: {
    _id: {
      bsonType: 'objectId',
      description: '_id must be an ObjectId',
    },
    number: {
      bsonType: 'int',
      description: 'number must be an integer',
    },
    name: {
      bsonType: 'string',
      description: 'name must be a string',
    },
    tracks: {
      bsonType: 'array',
      maxItems: 3,
      items: {
        enum: tracks.map((track) => track.name),
        description: 'track must be one of the valid tracks',
      },
      description: 'tracks must be an array of strings',
    },
  },
  additionalProperties: false,
};

export default Team;
