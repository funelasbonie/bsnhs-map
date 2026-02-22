# BSNHS Digital Map - Locations JSON Guide

This guide explains how to add locations to `locations.json` for the BSNHS Digital Map.

## File Structure

The `locations.json` file contains an array of location objects. Each location represents a searchable place on the campus map.

## Location Object Schema

Each location object must have the following properties:

```json
{
  "name": "string",
  "type": "string",
  "lat": number,
  "lng": number,
  "category": "string"
}
```

## Property Descriptions

### `name` (string)
- **Description**: Display name of the location
- **Required**: Yes
- **Examples**: 
  - `"Gymnasium"`
  - `"10-MARCO M. ALVERO"`
  - `"Principal's Office"`
  - `"School Gate"`

### `type` (string)
- **Description**: Type of location - determines the icon displayed in search results
- **Required**: Yes
- **Valid Values**:
  - `"classroom"` - For individual classrooms (e.g., "10-MARCO M. ALVERO", "9-RICA MAE RC. VILLANUEVA")
  - `"building"` - For entire buildings (e.g., "STE Building", "Gymnasium")
  - `"office"` - For administrative offices (e.g., "Principal's Office", "Registrar", "Cashier")
  - `"facility"` - For facilities and amenities (e.g., "School Canteen", "Clinic", "Math Center", "Cookery Lab")
  - `"entrance"` - For entrances and gates (e.g., "School Gate")

### `lat` (number)
- **Description**: Latitude coordinate (GPS)
- **Required**: Yes
- **Format**: Decimal degrees
- **Example**: `15.660099`

### `lng` (number)
- **Description**: Longitude coordinate (GPS)
- **Required**: Yes
- **Format**: Decimal degrees
- **Example**: `120.772363`

### `category` (string)
- **Description**: Category for filtering and searching
- **Required**: Yes
- **Valid Values** (usually same as `type`):
  - `"classroom"` - Use for classrooms
  - `"building"` - Use for buildings
  - `"office"` - Use for offices
  - `"facility"` - Use for facilities, labs, centers, amenities
  - `"entrance"` - Use for entrances and gates

## Examples

### Classroom Example
```json
{
  "name": "10-MARCO M. ALVERO",
  "type": "classroom",
  "lat": 15.660480,
  "lng": 120.771850,
  "category": "classroom"
}
```

### Building Example
```json
{
  "name": "STE Building",
  "type": "building",
  "lat": 15.660150,
  "lng": 120.772200,
  "category": "building"
}
```

### Office Example
```json
{
  "name": "Principal's Office",
  "type": "office",
  "lat": 15.660020,
  "lng": 120.772250,
  "category": "office"
}
```

### Facility Example
```json
{
  "name": "School Canteen",
  "type": "facility",
  "lat": 15.660080,
  "lng": 120.772100,
  "category": "facility"
}
```

### Entrance Example
```json
{
  "name": "School Gate",
  "type": "entrance",
  "lat": 15.659840152344088,
  "lng": 120.77160433315026,
  "category": "entrance"
}
```

## Complete File Example

```json
{
  "locations": [
    {
      "name": "Gymnasium",
      "type": "building",
      "lat": 15.660099,
      "lng": 120.772363,
      "category": "facility"
    },
    {
      "name": "School Gate",
      "type": "entrance",
      "lat": 15.659840152344088,
      "lng": 120.77160433315026,
      "category": "entrance"
    },
    {
      "name": "10-MARCO M. ALVERO",
      "type": "classroom",
      "lat": 15.660480,
      "lng": 120.771850,
      "category": "classroom"
    }
  ]
}
```

## Notes

- **Coordinates**: Make sure GPS coordinates are accurate. You can get them from Google Maps by right-clicking on a location and selecting "What's here?"
- **Type vs Category**: Usually `type` and `category` will be the same value, but `type` determines the icon while `category` is used for filtering
- **Naming**: Use consistent naming conventions (e.g., always use "10-" prefix for Grade 10 classrooms)
- **JSON Format**: Make sure the JSON is valid - use commas between objects, no trailing commas

## How to Add Locations

1. Open `script/locations.json`
2. Add a new object to the `locations` array
3. Fill in all required properties (`name`, `type`, `lat`, `lng`, `category`)
4. Make sure to add a comma after the previous object (except for the last one)
5. Save the file
6. Refresh the map page to see the new location

## Troubleshooting

- **Location not showing in search**: Check that the JSON is valid (no syntax errors)
- **Wrong icon**: Verify the `type` field has a valid value
- **Location in wrong place**: Double-check the `lat` and `lng` coordinates

