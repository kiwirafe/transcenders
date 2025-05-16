import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  List,
  ListItem,
  ListIcon,
  Stack,
} from '@chakra-ui/react';

function Travel() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        p={2}
        bg="blue.200"
        color="black"
        boxShadow="md"
      >
        <Flex align="center">
          <Image src="/src/assets/logo.png" alt="Logo" boxSize="40px" mr={3} />
          <Heading size="md" fontWeight="semibold">
            ZenVoyage
          </Heading>
        </Flex>
        <Flex gap={4}>
          <Button
            as={RouterLink}
            to="/chat"
            variant="ghost"
            color="black"
            _hover={{ bg: 'blue.400' }}
          >
            Chat
          </Button>
          <Button
            as={RouterLink}
            to="/find"
            variant="ghost"
            color="black"
            _hover={{ bg: 'blue.400' }}
          >
            Find
          </Button>
          <Button
            as={RouterLink}
            to="/travel"
            variant="ghost"
            color="black"
            _hover={{ bg: 'blue.400' }}
          >
            Travel
          </Button>
        </Flex>
      </Flex>
      <Box maxW="container.lg" mx="auto" p={4}>
        <Heading as="h1" mb={6} textAlign="center">
          World Destinations
        </Heading>
        <Tabs isFitted>
          <TabList mb="1em">
            <Tab>Kingdom of Tonga</Tab>
            <Tab>Uzbekistan</Tab>
            <Tab>Fiji</Tab>
            <Tab>Tajikistan</Tab>
            <Tab>Vanuatu</Tab>
          </TabList>
          <TabPanels>
            {/* Tonga */}
            <TabPanel>
              <Stack spacing={4}>
                <Heading size="md">Welcome to the Kingdom of Tonga</Heading>
                <Text>The True South Pacific</Text>
                <Text>
                  Welcome to the Kingdom of Tonga – The True South Pacific
                  Discover the untouched beauty and authentic culture of Tonga, a hidden gem in the heart of the South Pacific. Known as the "Friendly Islands," Tonga offers a unique travel experience rich in natural wonders, ancient traditions, and genuine hospitality.<br /><br />
                  Why Visit Tonga? <br /><br />
                  🌴 Pristine Nature & Idyllic Beaches <br />
                  Tonga is made up of 170 islands, many of which are uninhabited – perfect for those seeking serenity. Picture white sandy beaches, crystal-clear turquoise waters, and lush tropical landscapes untouched by mass tourism.<br /><br />
                  🐋 Swim with Humpback Whales <br />
                  From July to October, Tonga is one of the few places in the world where you can swim alongside majestic humpback whales in their natural environment – a truly unforgettable and ethical wildlife encounter.<br /><br />
                  🌺 Authentic Polynesian Culture <br />
                  Experience a kingdom that has never been colonised. From vibrant cultural performances and traditional feasts (called 'umu') to ancient royal tombs and welcoming village life, Tonga offers a rare glimpse into authentic Polynesian heritage.<br /><br />
                  ⛵ Adventure & Relaxation <br />
                  Whether you're sailing between islands, snorkelling vibrant coral reefs, exploring limestone caves, or simply enjoying a hammock under the palms – Tonga balances adventure with peace like no other.<br /><br />
                  📍 Easy to Reach, Hard to Forget <br />
                  Just a short flight from New Zealand, Australia, or Fiji, Tonga is an accessible paradise waiting to be explored – but still blissfully off the beaten path.<br /><br />
                  Come for the beauty. Stay for the spirit. Leave with memories that last a lifetime. <br />
                  Tonga welcomes you – 'Mālō e lelei!' <br />
                </Text>
              </Stack>
            </TabPanel>

            {/* Uzbekistan */}
            <TabPanel>
              <Stack spacing={4}>
                <Heading size="md">Discover Uzbekistan</Heading>
                <Text>The Heart of the Silk Road</Text>
                <Text>
                  Discover Uzbekistan – The Heart of the Silk Road <br />
                  Step into a world where ancient cities sparkle like jewels in the desert, where every mosaic tells a story, and where East meets West in a rich tapestry of history, culture, and hospitality. Welcome to Uzbekistan – Central Asia’s best-kept secret.<br /><br />
                  Why Visit Uzbekistan?<br /><br />
                  🏛 Timeless Silk Road Cities<br />
                  Walk the same streets as traders, scholars, and explorers in the legendary cities of Samarkand, Bukhara, and Khiva. Admire majestic turquoise domes, intricately tiled madrasahs, and grand caravanserais that echo with centuries of stories.<br /><br />
                  🎨 Living Culture & Warm Hospitality<br />
                  Uzbekistan is more than just history – it’s alive with colourful traditions, vibrant bazaars, handwoven silk, and heartfelt welcomes. Enjoy a home-cooked plov with locals, dance to traditional music, and feel the warmth of true Central Asian hospitality.<br /><br />
                  🏔 Diverse Landscapes<br />
                  From the Kyzylkum Desert and the shimmering Aral Sea to mountain hikes in the Chimgan Range, Uzbekistan’s geography is as varied as it is beautiful – perfect for explorers and nature lovers alike.<br /><br />
                  🚆 Modern Comfort Meets Old-World Charm<br />
                  High-speed trains make travelling between ancient cities easy and comfortable, while modern amenities blend seamlessly with the country's rich past.<br /><br />
                  🕌 A Photographer’s Dream<br />
                  Whether you're capturing the golden light on Registan Square or the intricate patterns of Islamic architecture, Uzbekistan offers some of the most stunning backdrops in the world.<br /><br />
                  Uzbekistan – Where every step is a journey through history, and every smile is a new story.<br />
                  Explore the crossroads of civilizations. Your Silk Road adventure begins here.<br />

                </Text>
              </Stack>
            </TabPanel>

            {/* Fiji */}
            <TabPanel>
              <Stack spacing={4}>
                <Heading size="md">Welcome to Fiji</Heading>
                <Text>Where Happiness Comes Naturally</Text>
                <Text>
                  Bula! Welcome to Fiji, the tropical paradise of more than 300 islands scattered like emeralds across the South Pacific. With its crystal-clear waters, lush rainforests, and famously warm-hearted people, Fiji offers the ultimate island escape for every kind of traveller.<br /><br />
                  Why Visit Fiji?<br /><br />
                  🌊 World-Class Beaches & Coral Reefs<br />
                  Whether you're relaxing on the powdery sands of the Mamanuca Islands or diving the rainbow-coloured reefs of the Yasawas, Fiji is a dream destination for beach lovers, snorkellers, and scuba divers alike.<br /><br />
                  🌺 Fijian Culture & Village Life<br />
                  Immerse yourself in authentic Fijian traditions – from the warm “bula” greeting to the communal kava ceremony. Visit local villages, witness traditional dances, and connect with a way of life rooted in community and respect.<br /><br />
                  🏝 Luxury & Adventure Combined<br />
                  Whether you're staying in a luxury overwater villa, eco-resort, or backpacker-friendly beach hut, Fiji offers something for every budget. Enjoy world-class surfing, kayaking, hiking, or simply soak in the sun with a fresh coconut in hand.<br /><br />
                  🛶 Romance, Families, and Solo Retreats<br />
                  Fiji is the perfect destination for honeymooners, families, and solo travellers. From private island getaways to kid-friendly resorts, the islands cater to every type of adventure or relaxation you seek.<br /><br />
                  🌴 Untouched Beauty & Sustainable Travel<br />
                  Fiji is committed to protecting its natural beauty and cultural heritage. Many resorts are eco-conscious and community-focused, so your visit helps preserve paradise for future generations.<br /><br />
                  <br />
                  Fiji – More than just a holiday. It’s a feeling. It’s a welcome. It’s home.<br />
                  Come for the islands. Stay for the people. Leave with your heart full.

                </Text>
              </Stack>
            </TabPanel>

            {/* Tajikistan */}
            <TabPanel>
              <Stack spacing={4}>
                <Heading size="md">Welcome to Tajikistan</Heading>
                <Text>Mountains, Myths, and Timeless Traditions</Text>
                <Text>
                  Welcome to Tajikistan – Mountains, Myths, and Timeless Traditions<br />
                  Venture off the beaten path and discover Tajikistan – a land of soaring peaks, ancient Silk Road heritage, and a culture shaped by resilience, hospitality, and tradition. Tucked in the heart of Central Asia, Tajikistan is a destination for the curious soul seeking both raw natural beauty and deep cultural encounters.<br /><br />
                  Why Visit Tajikistan?<br /><br />
                  🏔 Spectacular Mountain Landscapes<br />
                  Home to the towering Pamir and Fann Mountains, Tajikistan is a paradise for hikers, climbers, and adventurers. Trek through alpine lakes, dramatic gorges, and remote villages along the legendary Pamir Highway, one of the world’s highest and most scenic roads.<br /><br />
                  🏛 Silk Road Legacy<br />
                  Explore the ancient city of Penjikent, once a thriving stop on the Silk Road, and marvel at centuries-old fortresses, mosques, and petroglyphs that whisper stories of empires and explorers.
                  👳‍♂️ Rich Cultural Traditions<br />
                  Tajik culture is a vibrant blend of Persian roots and local customs, celebrated through traditional music, dance, crafts, and festivals. Don’t miss a performance of Falak, the soulful mountain music that reflects the poetic spirit of the Tajik people.<br /><br />
                  🍽 Hospitality & Shared Meals<br />
                  Tajiks are known for their deep sense of hospitality. Guests are honoured with a table full of non (flatbread), fresh fruits, and the national dish plov – a hearty rice dish with meat and vegetables. Sharing tea and stories in a family’s home is a common and cherished experience.<br /><br />
                  🧵 Traditional Crafts & Dress<br />
                  Explore local markets for handwoven suzanis (embroidered textiles), colorful ikat fabrics, and carved wooden goods. In rural areas, you’ll see women in beautifully embroidered dresses and men in traditional skullcaps (tupi), especially during weddings and festivals.<br /><br />
                  🌙 Cultural Celebrations<br />
                  Time your visit with Nowruz, the Persian New Year celebrated in spring, to witness music, dancing, traditional games, and feasts that bring communities together in joy and unity.<br /><br />
                  <br />
                  Tajikistan – Where ancient culture meets wild nature, and every traveller is treated like family.<br />
                  Come for the mountains. Stay for the traditions. Leave with a deeper connection.<br />

                </Text>
              </Stack>
            </TabPanel>

            {/* Vanuatu */}
            <TabPanel>
              <Stack spacing={4}>
                <Heading size="md">Welcome to Vanuatu</Heading>
                <Text>Untouched Paradise, Ancient Spirit</Text>
                <Text>
                  Welcome to Vanuatu – Untouched Paradise, Ancient Spirit<br />
                  Step into a world of unspoiled beauty, rich tradition, and unforgettable adventure. Nestled in the South Pacific, the islands of Vanuatu offer a rare chance to experience nature and culture in their purest forms. From lush rainforests and active volcanoes to warm smiles and ancient customs, Vanuatu is where authentic island life thrives.<br /><br />
                  Why Visit Vanuatu?<br /><br />
                  🌋 Raw Natural Wonders<br />
                  Stand on the rim of Mount Yasur, one of the world’s most accessible active volcanoes, and feel the earth breathe beneath you. Dive into crystal-clear blue holes, swim through vibrant coral reefs, or explore hidden waterfalls deep in the jungle.
                  🏝 Over 80 Islands of Discovery<br />
                  Each island in Vanuatu offers its own charm – from the cultural richness of Espiritu Santo and the natural beauty of Tanna, to the laid-back capital of Port Vila on Efate. Whether you're after adventure or serenity, there's an island for you.
                  🛶 Ancient Culture & Traditions<br />
                  Vanuatu is home to some of the most intact and vibrant traditional cultures in the Pacific. Witness sacred dances, ceremonies, and custom rituals passed down through generations. Villages still live by kastom law, maintaining strong cultural identities and respect for the land.<br /><br />
                  💃 Land Diving & Custom Ceremonies<br />
                  See the original form of bungee jumping – Nagol (land diving) – a breathtaking ritual of courage and renewal performed by men in southern Pentecost. Experience traditional storytelling, bamboo music, and sand drawing, recognized by UNESCO as part of humanity's cultural heritage.<br /><br />
                  🌺 Warm People & Island Hospitality<br />
                  Ni-Vanuatu people are known for their genuine friendliness and deep sense of community. Whether you're welcomed into a local village or greeted by a smile in the market, you'll quickly feel at home.<br /><br />
                  🍍 Tropical Flavours<br />
                  Enjoy organic island cuisine with freshly caught seafood, tropical fruits, and local specialties like laplap, the national dish made from yam, coconut milk, and meat, wrapped in banana leaves and cooked in earth ovens.<br /><br />
                  Vanuatu – Where Earth Speaks, Culture Breathes, and Life Slows Down.<br />
                  Come for the adventure. Stay for the spirit. Leave with your heart full.<br />
                </Text>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Travel;