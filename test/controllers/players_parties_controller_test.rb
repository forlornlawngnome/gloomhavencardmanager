require 'test_helper'

class PlayersPartiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @players_party = players_parties(:one)
  end

  test "should get index" do
    get players_parties_url
    assert_response :success
  end

  test "should get new" do
    get new_players_party_url
    assert_response :success
  end

  test "should create players_party" do
    assert_difference('PlayersParty.count') do
      post players_parties_url, params: { players_party: { party_id: @players_party.party_id, player_id: @players_party.player_id } }
    end

    assert_redirected_to players_party_url(PlayersParty.last)
  end

  test "should show players_party" do
    get players_party_url(@players_party)
    assert_response :success
  end

  test "should get edit" do
    get edit_players_party_url(@players_party)
    assert_response :success
  end

  test "should update players_party" do
    patch players_party_url(@players_party), params: { players_party: { party_id: @players_party.party_id, player_id: @players_party.player_id } }
    assert_redirected_to players_party_url(@players_party)
  end

  test "should destroy players_party" do
    assert_difference('PlayersParty.count', -1) do
      delete players_party_url(@players_party)
    end

    assert_redirected_to players_parties_url
  end
end
