import React from "react";
import { Box, Container, Stack, Typography, Card, CardMedia, CardContent } from "@mui/material";

interface Feature {
    id: number;
    title: string;
    description: string;
    image: string;
}

const features: Feature[] = [
   { id: 1, title: "Client Management & Onboarding", description: "Centralized client database with secure portal access.", image: "/images/client-onboarding.png" } ,
    { id: 2, title: "Automated Task & Workflow", description: "Streamline tax filings, audits, and compliance tracking.", image: "/images/task-automation.png" },
    { id: 3, title: "Billing & Payments", description: "Auto-generate invoices with multiple payment options.", image: "/images/billing.png" },
    { id: 4, title: "Tax & Compliance Automation", description: "Never miss a deadline with AI-powered compliance tracking.", image: "/images/tax-automation.png" },
];

const FeatureSection: React.FC<{ feature: Feature; isEven: boolean }> = ({ feature, isEven }) => {
    return (
        <Stack
            direction={{ xs: "column", md: isEven ? "row-reverse" : "row" }}
            alignItems="center"
            spacing={4}
            sx={{ mb: 6 }}
        >
            {/* Image */}
            <Box sx={{ flex: 1 }}>
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <CardMedia component="img" height="250" image={feature.image} alt={feature.title} />
                </Card>
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1 }}>
                <CardContent>
                    <Typography variant="h5" fontWeight="bold">
                        {feature.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {feature.description}
                    </Typography>
                </CardContent>
            </Box>
        </Stack>
    );
};

const FeaturesList: React.FC = () => {
    return (
        <Container sx={{ py: 6 }}>
            {features.map((feature, index) => (
                <FeatureSection key={feature.id} feature={feature} isEven={index % 2 !== 0} />
            ))}
        </Container>
    );
};

export default FeaturesList;
