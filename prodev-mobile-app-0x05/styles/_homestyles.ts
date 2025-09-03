import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },

  // 🔎 Search Section
  searchGroup: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F3F6",
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
    marginRight: 10,
  },
  searchFormText: {
    fontSize: 14,
    color: "#333",
  },
  searchControl: {
    fontSize: 14,
    color: "#555",
    paddingVertical: 4,
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2CB770",
    alignItems: "center",
    justifyContent: "center",
  },

  // 🏷 Filters
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 16,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.2,
    marginHorizontal: 4,
  },

  // 📋 Listings
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#2CB770",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
