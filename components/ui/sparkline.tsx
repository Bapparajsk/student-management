import { curveCatmullRom, line } from 'd3-shape';
import React from 'react';
import Svg, {
    Circle,
    Defs,
    LinearGradient,
    Path,
    Stop,
} from 'react-native-svg';

interface SparklineProps {
    data: number[];
    width?: number;
    height?: number;
    color?: string;
    showDot?: boolean;
    glow?: boolean;
}

export const Sparkline = ({
    data,
    width = 120,
    height = 50,
    color = '#00D5BE',
    showDot = false,
    glow = false,
}: SparklineProps) => {
    if (data.length < 2) return null;

    const minValue = 0;
    const maxValue = Math.max(...data) * 1.1;

    const points = data.map((value, index) => ({
        x: (index / (data.length - 1)) * width,
        y:
            height -
            ((value - minValue) /
                (maxValue - minValue)) *
            height,
    }));

    const linePath =
        line<{ x: number; y: number }>()
            .x(d => d.x)
            .y(d => d.y)
            .curve(curveCatmullRom.alpha(0.5))(
                points
            ) || '';

    const areaPath =
        `${linePath}
     L ${width} ${height}
     L 0 ${height}
     Z`;

    const lastPoint =
        points[points.length - 1];

    return (
        <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
        >
            <Defs>
                <LinearGradient
                    id="graphGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <Stop
                        offset="0%"
                        stopColor={color}
                        stopOpacity={0.35}
                    />
                    <Stop
                        offset="100%"
                        stopColor={color}
                        stopOpacity={0}
                    />
                </LinearGradient>
            </Defs>

            {/* Area Fill */}
            <Path
                d={areaPath}
                fill="url(#graphGradient)"
            />

            {/* Line */}
            <Path
                d={linePath}
                fill="none"
                stroke={color}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* End Dot */}
            {showDot && (
                <Circle
                    cx={lastPoint.x}
                    cy={lastPoint.y}
                    r={3}
                    fill={color}
                />
            )}

            {glow && <Path
                d={linePath}
                fill="none"
                stroke={color}
                strokeWidth={6}
                opacity={0.15}
            />}

            {glow && <Path
                d={linePath}
                fill="none"
                stroke={color}
                strokeWidth={2.5}
            />}
        </Svg>
    );
};