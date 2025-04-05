"use client"
import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const CardsComponent: React.FC = () => {
    return (
        <>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap={4}>
                <Box flex="1 1 150px">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 700 }}>Tasks Overview</Typography>
                            <Typography sx={{ fontSize: 11 }}>5</Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box flex="1 1 150px">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 700 }}>Assignments Overview</Typography>
                            <Typography sx={{ fontSize: 11 }}>3</Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box flex="1 1 150px">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 700 }}>Total Revenue</Typography>
                            <Typography sx={{ fontSize: 11 }}>Rs. 20,000</Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box flex="1 1 150px">
                    <Card>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 700 }}>Total Clients</Typography>
                            <Typography sx={{ fontSize: 11 }}>150</Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    );
}

export default CardsComponent;