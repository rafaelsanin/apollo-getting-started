const { gql } = require('apollo-server'); // gql tagged template literal: Wrap GraphQl strings like SDL

const typeDefs = gql`
    type Query {
        "Get Tracks array for homepage grid"
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        "Track's id"
        id: ID!
        "Track's title"
        title: String!
        "Track's Author"
        author: Author!
        "URL to the image for the Track's card"
        thumbnail: String
        "Track duration including all modules"
        length: Int
        "Track's number of modules"
        modulesCount: Int
    }

    "Author of a complete Track or a module"
    type Author {
        "Author's id"
        id: ID!
        "Author's name"
        name: String!
        "URL to the Author's photo"
        photo: String
    }
`;
module.exports = typeDefs;
