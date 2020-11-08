require 'test_helper'

class CharacterRoundsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @character_round = character_rounds(:one)
  end

  test "should get index" do
    get character_rounds_url
    assert_response :success
  end

  test "should get new" do
    get new_character_round_url
    assert_response :success
  end

  test "should create character_round" do
    assert_difference('CharacterRound.count') do
      post character_rounds_url, params: { character_round: { card_1_id: @character_round.card_1_id, card_2_id: @character_round.card_2_id, character_scenario_id: @character_round.character_scenario_id, long_rest: @character_round.long_rest, round_id: @character_round.round_id, short_rest: @character_round.short_rest } }
    end

    assert_redirected_to character_round_url(CharacterRound.last)
  end

  test "should show character_round" do
    get character_round_url(@character_round)
    assert_response :success
  end

  test "should get edit" do
    get edit_character_round_url(@character_round)
    assert_response :success
  end

  test "should update character_round" do
    patch character_round_url(@character_round), params: { character_round: { card_1_id: @character_round.card_1_id, card_2_id: @character_round.card_2_id, character_scenario_id: @character_round.character_scenario_id, long_rest: @character_round.long_rest, round_id: @character_round.round_id, short_rest: @character_round.short_rest } }
    assert_redirected_to character_round_url(@character_round)
  end

  test "should destroy character_round" do
    assert_difference('CharacterRound.count', -1) do
      delete character_round_url(@character_round)
    end

    assert_redirected_to character_rounds_url
  end
end
