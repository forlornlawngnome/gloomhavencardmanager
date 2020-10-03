require 'test_helper'

class AbilityCardsEnhancementsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ability_cards_enhancement = ability_cards_enhancements(:one)
  end

  test "should get index" do
    get ability_cards_enhancements_url
    assert_response :success
  end

  test "should get new" do
    get new_ability_cards_enhancement_url
    assert_response :success
  end

  test "should create ability_cards_enhancement" do
    assert_difference('AbilityCardsEnhancement.count') do
      post ability_cards_enhancements_url, params: { ability_cards_enhancement: { ability_card_id: @ability_cards_enhancement.ability_card_id, enhancement_id: @ability_cards_enhancement.enhancement_id, is_top: @ability_cards_enhancement.is_top } }
    end

    assert_redirected_to ability_cards_enhancement_url(AbilityCardsEnhancement.last)
  end

  test "should show ability_cards_enhancement" do
    get ability_cards_enhancement_url(@ability_cards_enhancement)
    assert_response :success
  end

  test "should get edit" do
    get edit_ability_cards_enhancement_url(@ability_cards_enhancement)
    assert_response :success
  end

  test "should update ability_cards_enhancement" do
    patch ability_cards_enhancement_url(@ability_cards_enhancement), params: { ability_cards_enhancement: { ability_card_id: @ability_cards_enhancement.ability_card_id, enhancement_id: @ability_cards_enhancement.enhancement_id, is_top: @ability_cards_enhancement.is_top } }
    assert_redirected_to ability_cards_enhancement_url(@ability_cards_enhancement)
  end

  test "should destroy ability_cards_enhancement" do
    assert_difference('AbilityCardsEnhancement.count', -1) do
      delete ability_cards_enhancement_url(@ability_cards_enhancement)
    end

    assert_redirected_to ability_cards_enhancements_url
  end
end
