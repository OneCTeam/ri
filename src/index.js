const api = require("./util/api");

module.exports = {
  /*<──  ───────    ANIMALS   ───────  ──>*/
  horse: async (version) => {
    const data = await api("animals", "horse", version);
    return data;
  },
  cat: async (version) => {
    const data = await api("animals", "cat", version);
    return data;
  },

  dog: async (version) => {
    const data = await api("animals", "dog", version);
    return data;
  },

  fish: async (version) => {
    const data = await api("animals", "fish", version);
    return data;
  },
  koala: async (version) => {
    const data = await api("animals", "koala", version);
    return data;
  },
  panda: async (version) => {
    const data = await api("animals", "panda", version);
    return data;
  },
  /*<──  ───────    ACTIONS   ───────  ──>*/
  kick: async (version) => {
    const data = await api("actions", "kick", version);
    return data;
  },
  slap: async (version) => {
    const data = await api("actions", "slap", version);
    return data;
  },

  happy: async (version) => {
    const data = await api("actions", "happy", version);
    return data;
  },

  sleep: async (version) => {
    const data = await api("actions", "sleep", version);
    return data;
  },
  kiss: async (version) => {
    const data = await api("actions", "kiss", version);
    return data;
  },
  hug: async (version) => {
    const data = await api("actions", "hug", version);
    return data;
  },
  kill: async (version) => {
    const data = await api("actions", "kill", version);
    return data;
  },
  cry: async (version) => {
    const data = await api("actions", "cry", version);
    return data;
  },
  dance: async (version) => {
    const data = await api("actions", "dance", version);
    return data;
  },
  confused: async (version) => {
    const data = await api("actions", "confused", version);
    return data;
  },
  tPose: async (version) => {
    const data = await api("actions", "t-pose", version);
    return data;
  },
  eating: async (version) => {
    const data = await api("actions", "eating", version);
    return data;
  },
};
