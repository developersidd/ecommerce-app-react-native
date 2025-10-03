import React, { useCallback, useState } from 'react';
import {
  Alert,
  Dimensions,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { scale } from 'react-native-size-matters';
import useDebounce from '../../hooks/useDebounce';
import RangeSlider from '../RangeSlider/RangeSlider';
import tailwind from 'twrnc';

const { width, height } = Dimensions.get('window');

// Types
interface FilterData {
  genders: {
    mens: boolean;
    womens: boolean;
    kids: boolean;
  };
  priceRange: {
    max: number;
    min: number;
  };
  sortBy: string;
}

interface SortBy {
  id: string;
  label: string;
  value: string;
}

interface ProductsFilteringModalProps {
  onClose: () => void;
  visible: boolean;
}

const ProductsFilteringModal: React.FC<ProductsFilteringModalProps> = ({
  visible,
  onClose,
}) => {
  // State management
  const [filters, setFilters] = useState<FilterData>({
    genders: {
      mens: false,
      womens: false,
      kids: false,
    },
    priceRange: {
      min: 100,
      max: 2500,
    },
    sortBy: 'relevance',
  });
  console.log('🚀 ~ filters:', filters);

  // Sort by options
  const sortBy: SortBy[] = [
    { id: '4', label: 'Newest Arrivals', value: 'newest_arrivals' },
    { id: '1', label: 'Relevance', value: 'relevance' },
    { id: '2', label: 'Price: Low - High', value: 'price_low_to_high' },
    { id: '3', label: 'Price: High - Low', value: 'price_high_to_low' },
  ];

  // Toggle gender filter
  const toggleGenderFilter = useCallback(
    (genderType: keyof FilterData['genders']) => {
      setFilters(prev => ({
        ...prev,
        genders: {
          ...prev.genders,
          [genderType]: !prev.genders[genderType],
        },
      }));
    },
    [],
  );

  // Update price range
  const updatePriceRange = useCallback((type: 'max' | 'min', value: number) => {
    setFilters(prev => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [type]: value,
      },
    }));
  }, []);

  // Select time slot
  const selectSortBy = useCallback((sortBy: string) => {
    setFilters(prev => ({
      ...prev,
      sortBy,
    }));
  }, []);

  // Reset all filters
  const resetFilters = useCallback(() => {
    setFilters({
      genders: {
        male: false,
        female: false,
        all: false,
      },
      priceRange: {
        min: 100,
        max: 2500,
      },
      sortBy: 'newest_arrivals',
    });
  }, []);

  // handle applying filters
  const handleApplyFilter = useCallback(async () => {
    try {
      // You can add API call here
      console.log('Applying filters:', filters);

      onClose();
    } catch (error) {
      Alert.alert('Error', 'Failed to apply filters. Please try again.');
      console.error('Filter application error:', error);
    }
  }, [filters, onClose]);

  const CheckBox: React.FC<{ checked: boolean; onPress: () => void }> = ({
    checked,
    onPress,
  }) => (
    <TouchableOpacity style={styles.checkbox} onPress={onPress}>
      {checked && <View style={styles.checkboxChecked} />}
    </TouchableOpacity>
  );

  const handleDebouncedSliderChange = useDebounce((value: number | string) => {
    updatePriceRange('max', Math.round(+value));
  }, 200);
  const MIN_DEFAULT = 100;
  const MAX_DEFAULT = 2500;
  
  return (
    <Modal
      visible={visible}
      transparent
      style={{
        margin: 0,
        alignItems: undefined,
        justifyContent: undefined,
        flex: 1,
      }}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Filters</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <View style={tailwind`px-5`}>

            {/* Genders Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Genders</Text>

              {/*<TouchableOpacity
                style={styles.filterItem}
                onPress={() => toggleGenderFilter('all')}
              >
                <Text style={styles.filterText}>All</Text>
                <CheckBox
                  checked={filters.genders.all}
                  onPress={() => toggleGenderFilter('all')}
                />
              </TouchableOpacity>*/}
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => toggleGenderFilter('mens')}
              >
                <Text style={styles.filterText}>Mens</Text>
                <CheckBox
                  checked={filters.genders.mens}
                  onPress={() => toggleGenderFilter('mens')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => toggleGenderFilter('womens')}
              >
                <Text style={styles.filterText}>Womens</Text>
                <CheckBox
                  checked={filters.genders.womens}
                  onPress={() => toggleGenderFilter('womens')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filterItem}
                onPress={() => toggleGenderFilter('kids')}
              >
                <Text style={styles.filterText}>Kids</Text>
                <CheckBox
                  checked={filters.genders.kids}
                  onPress={() => toggleGenderFilter('kids')}
                />
              </TouchableOpacity>
            </View>

            {/* Sort By Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sort By</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.timeScrollView}
                contentContainerStyle={styles.timeScrollContent}
              >
                {sortBy.map(slot => (
                  <TouchableOpacity
                    key={slot.id}
                    style={[
                      styles.sortBy,
                      filters.sortBy === slot.value && styles.selectedSortBy,
                    ]}
                    onPress={() => selectSortBy(slot.value)}
                  >
                    <Text
                      style={[
                        styles.sortByText,
                        filters.sortBy === slot.value &&
                          styles.selectedSortByText,
                      ]}
                    >
                      {slot.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            </View>

            {/* Price Range Section */}
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, tailwind`px-5`]}>Price Range</Text>
              <GestureHandlerRootView style={tailwind`flex-1`}>
                <View style={styles.sliderContainer}>
                  {/* range slider */}
                  <RangeSlider
                    sliderWidth={330}
                    min={MIN_DEFAULT}
                    max={MAX_DEFAULT}
                    step={10}
                    onValueChange={range => {
                      updatePriceRange('min', range.min);
                      updatePriceRange('max', range.max);
                    
                    }}
                  />
                  <View style={styles.priceLabels}>
                    <Text style={styles.priceText}>
                      ${filters.priceRange.min}.00
                    </Text>
                    <Text style={styles.priceText}>
                      ${filters.priceRange.max}.00
                    </Text>
                  </View>
                </View>
              </GestureHandlerRootView>
            </View>
          </ScrollView>

          {/* Footer Buttons */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={handleApplyFilter}
            >
              <Text style={styles.applyButtonText}>Apply Filter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    //width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: scale(630),
    width: '100%',
    margin: 0,
    //paddingHorizontal: 20,
    paddingTop: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 28,
    color: '#666666',
    fontWeight: '300',
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  filterText: {
    fontSize: 16,
    color: '#333333',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#1A1A1A',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: 14,
    height: 14,
    backgroundColor: '#1A1A1A',
    borderRadius: 2,
  },
  timeScrollView: {
    marginTop: 10,
  },
  timeScrollContent: {
    paddingHorizontal: 5,
  },
  sortBy: {
    paddingHorizontal: 13,
    paddingVertical: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    alignItems: 'center',
  },
  selectedSortBy: {
    backgroundColor: '#1A1A1A',
    borderColor: '#E6E6E6',
  },
  sortByText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '400',
  },
  selectedSortByText: {
    color: '#FFFFFF',
  },
  sliderContainer: {
    //marginTop: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderThumb: {
    backgroundColor: '#1A1A1A',
    width: 25,
    height: 25,
  },
  sliderTrack: {
    height: 7,
    borderRadius: 2,
    backgroundColor: 'red',
  },
  priceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  priceText: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '500',
  },
  footer: {
    paddingVertical: 20,
    gap: 10,
  },
  applyButton: {
    backgroundColor: '#1A1A1A',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resetButton: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  resetButtonText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ProductsFilteringModal;
