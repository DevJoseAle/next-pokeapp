import React, { FC } from 'react'
import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from '@/interfaces'
import { useRouter } from 'next/router';


interface Props {
    pokemon: SmallPokemon;
}
const PokemonCard : FC<Props> = ({pokemon}) => {
  const router = useRouter();
  const onClick = () =>{
    router.push(`/pokemon/${pokemon.id}`)
    
  }
  return (
    <Grid 
      xs={6} sm={3} md={2} xl={1} key={pokemon.id} 
      onClick={onClick}
      >

              <Card hoverable clickable>
                <Card.Body css={{p:1}}>
                  <Card.Image
                    src={pokemon.img}
                    width='100%'
                    height={250}
                    />
                </Card.Body>
                <Card.Footer 
                   
                   css={{
                     position: "absolute",
                     bgBlur: "#ffffff66",
                     borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                     bottom: 0,
                     zIndex: 1,
                   }}
                  >
                  <Row justify='space-between' >

                    <Text transform='capitalize' weight='bold'
                    >{pokemon.name}</Text>
                    <Text>{pokemon.id}</Text>
                  </Row>

                </Card.Footer>
              </Card>
            
           </Grid>
  )
}

export default PokemonCard