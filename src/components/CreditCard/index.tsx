import React from 'react';
import { Dimensions } from 'react-native';
import { Canvas, RoundedRect, LinearGradient, vec, Circle, Group, Text, useFont, TextPath, Skia, Blur } from '@shopify/react-native-skia';

import cairoRegular from '../../assets/fonts/Cairo-Regular.ttf';

import { LoadIndicator } from '../LoadIndicator';

const width = Dimensions.get('window').width - 24;
const height = 200;

const circle = Skia.Path.Make();
circle.addCircle(30, -10, 50);

export function CreditCard() {
  const font = useFont(cairoRegular, 16);

  if (font === null) {
    return <LoadIndicator />
  }

  return (
    <Canvas style={{ height, width }}>
      <RoundedRect x={0} y={0} height={height} width={width} r={10}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(256, 256)}
          colors={["#5B9A93", "#2E645F", "#40534D", "#5B9A93"]}
        />
      </RoundedRect>

      <Group blendMode="overlay">
        <Circle cx={width - 60} cy={40} r={20} color="#D6A485" />
        <Circle cx={width - 40} cy={40} r={20} color="#98504B" />
      </Group>

      <Text
        x={20}
        y={50}
        font={font}
        color="#FFF"
        text="Nome do banco"
      />

      <Text
        x={20}
        y={height - 90}
        font={font}
        color="#FFF"
        text="5325 4141 2355 5782"
      />

      <Text
        x={20}
        y={height - 30}
        font={font}
        size={32}
        color="#FFF"
        text="12/2024"
      />

      <Text
        x={width - 60}
        y={height - 30}
        font={font}
        color="#FFF"
        text="000"
      />

      <TextPath
        text="Cartão de crédito virtual"
        path={circle}
        font={font}
        opacity={0.3}
      >
        <Blur blur={1} />
      </TextPath>
    </Canvas>
  );
}