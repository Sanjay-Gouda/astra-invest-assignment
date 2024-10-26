import { DataTable } from "@/components/Table/table";
import { ThemeToggle } from "@/components/ThemeToggle/themeToggle";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "end" }}>
        <ThemeToggle />
      </Box>
      <DataTable />
    </Container>
  );
}
