import { Box, Skeleton } from "@mui/material";

export const CardSkeleton = () =>
  Array.from(new Array(10)).map((_, index) => (
    <Box key={index} sx={{ width: 345, mr: 2 }}>
      <Skeleton variant="rectangular" width={345} height={420} />
      <Box sx={{ pt: 2 }}>
        <Skeleton width="60%" />
        <Skeleton />
        <Skeleton />
      </Box>
      <Box sx={{ pt: 2 }}>
        <Skeleton width="60%" />
      </Box>
    </Box>
  ));
