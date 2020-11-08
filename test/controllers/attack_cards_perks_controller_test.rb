require 'test_helper'

class AttackCardsPerksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @attack_cards_perk = attack_cards_perks(:one)
  end

  test "should get index" do
    get attack_cards_perks_url
    assert_response :success
  end

  test "should get new" do
    get new_attack_cards_perk_url
    assert_response :success
  end

  test "should create attack_cards_perk" do
    assert_difference('AttackCardsPerk.count') do
      post attack_cards_perks_url, params: { attack_cards_perk: { attack_card_id: @attack_cards_perk.attack_card_id, perk_id: @attack_cards_perk.perk_id } }
    end

    assert_redirected_to attack_cards_perk_url(AttackCardsPerk.last)
  end

  test "should show attack_cards_perk" do
    get attack_cards_perk_url(@attack_cards_perk)
    assert_response :success
  end

  test "should get edit" do
    get edit_attack_cards_perk_url(@attack_cards_perk)
    assert_response :success
  end

  test "should update attack_cards_perk" do
    patch attack_cards_perk_url(@attack_cards_perk), params: { attack_cards_perk: { attack_card_id: @attack_cards_perk.attack_card_id, perk_id: @attack_cards_perk.perk_id } }
    assert_redirected_to attack_cards_perk_url(@attack_cards_perk)
  end

  test "should destroy attack_cards_perk" do
    assert_difference('AttackCardsPerk.count', -1) do
      delete attack_cards_perk_url(@attack_cards_perk)
    end

    assert_redirected_to attack_cards_perks_url
  end
end
