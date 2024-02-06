# Searchable Sheet

List with a built-in search field.

## Getting Started

### Installation

add github package to `package.json`

```json
{
  "dependencies": {
    "@reactnative-packages/searchable-sheet": "github:reactnative-packages/searchable-sheet.git#latest"
  }
}
```

## Usage

Default usage

```typescript
import { SearchableSheet } from "reactnative-packages/searchable-sheet";

export function Home() {
  return (
    <>
      {/** other components */}
      <SearchableSheet
        onClear={() => setYear(null)}
        data={data}
        onChange={(newItem) => setYear(newItem)}
        required={true}
        title="En quelle année sommes nous ?"
        inputLabel="inputLabel"
        placeholder="placeholder"
        titleStyle={styles.titleStyle}
        tintColor={colors.color02}
        nameExtractor={(item) => item.name}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
        refreshing={isRefreshing}
        onRefresh={refreshData}
      />
      {/** other components */}
    </>
  );
}
```

## Override Components

Exposes dynamically loaded modules in the application based on the specific permissions of the user.

### Anchor Component

```typescript
import {
  SearchableSheet,
  SelectAnchor,
} from "reactnative-packages/searchable-sheet";

export function Home() {
  return (
    <>
      {/** other components */}
      <SearchableSheet
        anchor={<SelectAnchor />}
        onClear={() => setYear(null)}
        data={data}
        onChange={(newItem) => setYear(newItem)}
        required={true}
        title="En quelle année sommes nous ?"
        inputLabel="inputLabel"
        placeholder="placeholder"
        titleStyle={styles.titleStyle}
        tintColor={colors.color02}
        nameExtractor={(item) => item.name}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
        refreshing={isRefreshing}
        onRefresh={refreshData}
      />
      {/** other components */}
    </>
  );
}
```

### Render Item

```typescript
import {
  SearchableSheet,
  SearchableItem,
} from "reactnative-packages/searchable-sheet";

export function Home() {
  return (
    <>
      {/** other components */}
      <SearchableSheet
        renderItem={<SearchableItem />}
        onClear={() => setYear(null)}
        data={data}
        onChange={(newItem) => setYear(newItem)}
        required={true}
        title="En quelle année sommes nous ?"
        inputLabel="inputLabel"
        placeholder="placeholder"
        titleStyle={styles.titleStyle}
        tintColor={colors.color02}
        nameExtractor={(item) => item.name}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
        refreshing={isRefreshing}
        onRefresh={refreshData}
      />
      {/** other components */}
    </>
  );
}
```

### Use ref

```typescript
import {
  SearchableSheet,
  SearchableSheetRef,
} from "reactnative-packages/searchable-sheet";

export function Home() {
  const searchableRef = useRef<SearchableSheetRef>(null);

  function open() {
    searchableRef.current.open();
  }

  function close() {
    searchableRef.current.close();
  }

  return (
    <>
      {/** other components */}
      <SearchableSheet
        ref={searchableRef}
        renderItem={<SearchableItem />}
        onClear={() => setYear(null)}
        data={data}
        onChange={(newItem) => setYear(newItem)}
        required={true}
        title="En quelle année sommes nous ?"
        inputLabel="inputLabel"
        placeholder="placeholder"
        titleStyle={styles.titleStyle}
        tintColor={colors.color02}
        nameExtractor={(item) => item.name}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
        refreshing={isRefreshing}
        onRefresh={refreshData}
      />
      {/** other components */}
    </>
  );
}
```

### About Props

| Prop      | Description                             |
| --------- | --------------------------------------- |
| tintColor | sets the primary color of the component |
