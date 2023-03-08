import React from 'react'
import { Text, Box, SimpleGrid, Input, Button } from '@chakra-ui/react';

const Content = ({ title, titleChange, description, descriptionChange, addNote, items, deleteItem, clearAll }) => {

    return (
        <div>
            <Text backgroundColor={"#C0EEF2"} textAlign="center" p={5} fontSize={'xl'} >
                Notes App
            </Text>

            <Box width={"100%"} py={2} px={'24'} backgroundColor="#0E8388" minH={'100vh'} >

                <Input mt={2} value={title} mb={4} placeholder="Enter Title" color={"white"} fontSize="xl" fontWeight={'medium'} _placeholder={{ color: "white", opacity: 0.4 }} focusBorderColor={"#C0EEF2"} onChange={titleChange} />

                <Input value={description} placeholder='Enter Description' color={"white"} fontSize="xl" fontWeight={'medium'} _placeholder={{ color: "white", opacity: 0.4 }} focusBorderColor={"#C0EEF2"} onChange={descriptionChange} />

                <Button onClick={addNote} mt={3} mx={3} colorScheme="cyan" >Add Note</Button>
                <Button onClick={clearAll} mt={3} colorScheme="cyan" >Clear All</Button>

                <SimpleGrid p={5} backgroundColor="#0E8388" border={"none"} columns={[1, null, 2]} spacing={[3, null, 10]}>
                    {
                        items.map((item, index) => {
                            return (
                                <Box key={index} bg='#CBE4DE' p={4} borderRadius={"md"} textAlign="justify" minH={'fit-content'} >
                                    <h4 className='heading' >{item.title}</h4>
                                    <p>{item.description}</p>
                                    <div className='date' >
                                        <p>Created At : {new Date().toLocaleDateString()} </p>
                                        <button onClick={() => deleteItem(index)} >Delete</button>
                                    </div>
                                </Box>
                            )
                        })
                    }
                </SimpleGrid>
            </Box >
        </div >
    )
}

export default Content;