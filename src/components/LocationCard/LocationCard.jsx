// import { 
//   Link,
//   Box,
//   Text,
//   Heading,
//   HStack,
//   VStack,
//   Flex,

// } from '@chakra-ui/react'
// import { Icon } from '@chakra-ui/react'
// import { LuExternalLink  } from 'react-icons/lu'


// // --> takes prop from ProfilePage (user, setUser)
// export default function LocationCard({ bakery }) {

//   const textStyles = {
//     fontSize: 'lg',
//   }

//   return (
//     <Box
//       bg='gray.200'
//       position='fixed'
//       top='500px'  // Adjust as needed
//       right='20px'  // Adjust as needed
//       zIndex='10'  // Ensure it's above other content
//     >
//       <VStack spacing={4}>
//         <Heading as='h2' size='2xl'>Location & Hours Card</Heading>
//         <HStack>
//           <Text sx={textStyles}><Link href={bakery.website} isExternal> {bakery.website} </Link></Text>
//           <Icon as={LuExternalLink} boxSize={6} />
//         </HStack>
//         <Text sx={textStyles}>{bakery.phoneNumber ? bakery.phoneNumber : 'Unavailable'}</Text>
//         <Text sx={textStyles}>{bakery.address ? bakery.address : 'Unavailable'}</Text>
//         {bakery.openingHours && (
//           <div>
//             <Heading as='h2' size='2xl' sx={textStyles}>Opening Hours:</Heading>
//             {bakery.openingHours.weekday_text.map((day, index) => (
//               <p key={index}>{day}</p>
//             ))}
//           </div>
//         )}
//       </VStack>
//     </Box>
//   );
// }