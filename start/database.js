const database = [
    {
        name: `Blackbird`,
        description: `The term "blackbird" often refers to the common blackbird (Turdus merula), a species found in Europe, Asia, and North Africa. Males are characterized by their entirely black plumage and a distinctive bright orange-yellow beak, while females and juveniles are usually brown with speckled chests. Blackbirds are members of the thrush family and are known for their melodious song. They are adaptable birds, inhabiting woodlands, gardens, and parks, and have a diet consisting of insects, earthworms, seeds, and fruits.`
    },
    {
        name: `Raven`,
        description: `Ravens are large, intelligent birds belonging to the genus Corvus, specifically the common raven (Corvus corax). They are among the largest of the passerine birds and are easily recognizable by their glossy black plumage, large size, thick necks, and shaggy throat feathers. Ravens are highly intelligent and are known for their problem-solving skills and complex vocalizations. They have a widespread range, inhabiting various regions across the Northern Hemisphere, including forests, mountains, coastal areas, and deserts. Ravens are omnivorous scavengers, feeding on carrion, small animals, and a variety of plant materials.`
    },
    {
        name: `Crow`,
        description: `Crows are also part of the genus Corvus, and they are smaller than ravens. The term "crow" can refer to several species, including the American crow (Corvus brachyrhynchos) and the carrion crow (Corvus corone). Crows have glossy black feathers and are known for their intelligence, adaptability, and social behavior. They can be found in a wide range of habitats, including urban areas, woodlands, and agricultural fields. Crows are omnivorous, feeding on insects, small animals, seeds, fruits, and human food waste. They are known for their complex communication and ability to use tools.`
    },
    {
        name: `Magpie`,
        description: `Magpies are part of the family Corvidae, which also includes crows and ravens, but they belong to the genus Pica. The most well-known species is the Eurasian magpie (Pica pica). Magpies are medium-sized birds with striking black and white plumage and iridescent blue-green wings and tails. They are known for their intelligence and resourcefulness, often being associated with folklore and superstition. Magpies inhabit open and semi-open areas across Europe, Asia, and North America. They are omnivorous, eating insects, small mammals, fruits, grains, and occasionally carrion.`
    },
    {
        name: `Grackle`,
        description: `Grackles are part of the Icteridae family and are often confused with blackbirds due to their similar appearance. The common grackle (Quiscalus quiscula) is native to North America and is known for its iridescent black plumage, long tail, and yellow eyes. Grackles are social birds, often forming large flocks, and are known for their loud, harsh calls. They inhabit a variety of environments, including woodlands, marshes, and urban areas. Grackles are omnivorous and have a diverse diet that includes insects, small vertebrates, seeds, and human food scraps.`
    },
    
    {
        name: `Rook`,
        description: `Rooks are a type of crow found in Europe and parts of Asia, belonging to the species Corvus frugilegus. They are similar in appearance to crows but can be distinguished by their slightly larger size, shaggy thigh feathers, and pale, bare skin around the base of their beaks. Rooks are social birds that nest in colonies known as rookeries, often in tall trees. They are highly intelligent and have complex social structures. Their diet consists of insects, seeds, fruits, and small vertebrates, and they are often seen foraging in fields and open areas.`
    },
    {
        name: `Jackdaw`,
        description: `Jackdaws are small members of the crow family, belonging to the species Corvus monedula. They are found throughout Europe, North Africa, and parts of Asia. Jackdaws are distinguishable by their grey nape and pale grey eyes, which stand out against their otherwise black plumage. They are highly social birds, often forming large flocks and nesting in colonies. Jackdaws are known for their intelligence and inquisitive nature, frequently seen in urban and rural environments. Their diet is varied and includes insects, seeds, fruits, and small animals.`
    },
    {
        name: `Starling`,
        description: `Starlings are medium-sized passerine birds, with the European starling (Sturnus vulgaris) being one of the most widespread species. They are known for their glossy black feathers with a metallic sheen, which can exhibit hints of purple and green. During the winter, their plumage is speckled with white spots. Starlings are social and often form large, noisy flocks, especially during roosting. They are adaptable birds, inhabiting urban areas, farmland, and open countryside. Starlings are omnivorous and feed on insects, seeds, fruits, and human food waste. They are also known for their ability to mimic sounds and songs of other birds.`
    },
    {
        name: `Cowbird`,
        description: `Cowbirds are part of the Icteridae family and are native to the Americas. The brown-headed cowbird (Molothrus ater) is a common species found in North America. Males have glossy black bodies with distinctive brown heads, while females are more uniformly brown. Cowbirds are known for their brood parasitism behavior, where they lay their eggs in the nests of other bird species, leaving the host birds to raise their young. Cowbirds inhabit open and semi-open areas, including grasslands, agricultural fields, and forest edges. Their diet primarily consists of seeds and insects.`
    }
];

export const getBirds = ()=> {
    return database.map( bird => ({...bird}) );
}