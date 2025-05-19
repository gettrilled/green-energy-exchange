// src/lib/energyMarketApi.ts
// Fetch real energy prices from a public API (EIA Open Data example)

export async function fetchEnergyMarketData() {
  // Example: EIA Open Data API for US electricity prices
  // Docs: https://www.eia.gov/opendata/
  // You need to get a free API key from https://www.eia.gov/opendata/register.php
  const API_KEY = 'nBKPy02FWbq9HHMRw7Xu40Dj3AO1CKb5JHMn9vRh'; // Replace with your real API key
  const url = `https://api.eia.gov/v2/electricity/retail-sales/data/?api_key=${API_KEY}&data[]=price&frequency=annual&start=2022&end=2022&sort[0][column]=price&sort[0][direction]=asc&offset=0&length=10`;

  try {
    const res = await fetch(url);
    const json = await res.json();
    if (!json.response || !json.response.data) throw new Error('No data');
    // Map EIA data to our format (include state, sector, and year)
    return json.response.data.map((item) => ({
      type: item.sector_description || 'Unknown Sector',
      state: item.state_description || 'Unknown State',
      year: item.period || 'Unknown Year',
      price: item.price,
      unit: 'cents/kWh',
      trend: 'n/a',
    }));
  } catch (e) {
    // fallback to static demo data if API fails
    return [
      { type: 'solar', price: 4.2, unit: '₹/kWh', trend: 'stable' },
      { type: 'wind', price: 3.8, unit: '₹/kWh', trend: 'falling' },
      { type: 'hydro', price: 4.0, unit: '₹/kWh', trend: 'rising' },
      { type: 'biomass', price: 5.1, unit: '₹/kWh', trend: 'stable' },
      { type: 'geothermal', price: 6.0, unit: '₹/kWh', trend: 'stable' },
      { type: 'nuclear', price: 5.5, unit: '₹/kWh', trend: 'stable' },
      { type: 'tidal', price: 7.0, unit: '₹/kWh', trend: 'rising' },
    ];
  }
}
